DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOLEAN
);


-- USE burgers_db;

INSERT INTO burgers VALUES (0, "Cheese Burger", false);
INSERT INTO burgers VALUES (0, "Happy Burger", false);
