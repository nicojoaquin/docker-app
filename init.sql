USE testDB;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS last_names;

CREATE TABLE last_names (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	last_name VARCHAR(200)
);
CREATE TABLE users (
  id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  name        VARCHAR(200),
  last_name_id int DEFAULT NULL,
	FOREIGN KEY (last_name_id)
		REFERENCES last_names(id)
);

INSERT INTO last_names (last_name) VALUES
("Efraim"),
("Feldman"),
("Joaquin");
INSERT INTO users (name, last_name_id) VALUES
("Nico", 3),
("Aaron", 2),
("Kevin", 1);


