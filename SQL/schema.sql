CREATE DATABASE chat;

USE chat;

DROP TABLE messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  text VARCHAR(300),
  user VARCHAR(30),
  roomname VARCHAR(100),
  ID int (10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */
DROP TABLE users;
CREATE TABLE users (
  username VARCHAR(30),
  ID int (10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (ID)
);



/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




