CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  text VARCHAR(300),
  user VARCHAR(30),
  roomname VARCHAR(100),
  ID int (10),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/




