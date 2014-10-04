var db = require('./db');
var serverHelpers = require('./server-helpers');
// wham! magic.
var parseData = serverHelpers.collectData;
var saveMessage = db.saveMessage;
var saveUser = db.saveUser;
var findMessages = db.findAllMessages;
var findUser = db.findUser;


exports.postMessage = function(req, res) {
  // declare this variable so we can retain access to it throughout the entire promise chain.
  console.log('postMessage called...posting message');
  var message;

  var resultsCallback = function (results) {
    console.log('results callback called');
      var chat = {
        message: message.message,
        userid: results[0].id,
        roomname: message.roomname
      };

      saveMessage(chat.message, chat.userid, chat.roomname, function () {
        serverHelpers.sendResponse(res, message);
      });
  };

  parseData(req, function(_, msg) {
    console.log('requestHandler parseData called with message:', msg);
      message = msg;
      findUser(msg.username, function (err, results) {
        console.log('findingUser with results:', results);
        //if (err) throw err;
        // no results/0 results
        if (!results || !results.length) {
          // create the user, then post the message
              console.log('requestHandler.parseData if !results');
          saveUser(message.username, resultsCallback);
        } else {
          console.log('requestHandler.parseData else');
          // user exists, post the message to this user
          resultsCallback(results);
        }
      });
  });
};

exports.getMessages = function(req, res) {
  console.log('getMessages called...getting messages');
  findMessages(function(err, messages) {
    if (err) throw err;
    serverHelpers.sendResponse(res, messages);
  });
};

exports.sendOptionsResponse = function(req, res) {
  serverHelpers.sendResponse(res, null);
};
