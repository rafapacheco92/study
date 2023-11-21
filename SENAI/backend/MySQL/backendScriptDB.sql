CREATE DATABASE backend;

CREATE USER 'admin'@'localhost' IDENTIFIED BY '123456';

GRANT ALL PRIVILEGES ON backend.* TO 'user'@'localhost';

USE backend;

SELECT 1+1;