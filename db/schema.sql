CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;


create table burgers(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false
)