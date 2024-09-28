CREATE DATABASE register;

USE register;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  mobile_number INT(10),
);

CREATE TABLE Addresses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  address VARCHAR(255) not null,
  postal_code int(6) not null,
  city varchar(255),
  land_mark varchar(255),
  country varchar(255),
  FOREIGN KEY (userId) REFERENCES Users(id)
);