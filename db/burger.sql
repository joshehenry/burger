DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT, burger_name VARCHAR (30), devoured BOOLEAN, PRIMARY KEY (id)
);

USE burgers_db; 

INSERT INTO burgers (id, burger_name, devoured)
VALUES (1, "Triple Cheese Burger", True);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (2, "Veggie Burger", False);

INSERT INTO burgers (id, burger_name, devoured)
VALUES (3, "Heart Attack Burger", True);

