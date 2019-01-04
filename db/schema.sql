
CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO burgers (
burger_name,
devoured
) VALUES
(
"Triple Cheese Bypass Burger",
0
),
(
"Impossible Burger",
0
),
(
"Double Bacon, Fried Egg & Cheese",
0
);