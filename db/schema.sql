DROP DATABASE IF EXISTS open_minded;

CREATE DATABASE open_minded; 
USE open_minded;

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  question TEXT NOT NULL,
  category TEXT NOT NULL
);