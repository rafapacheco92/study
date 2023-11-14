CREATE DATABASE cadastro_estudantes;

Para criar um usuário:
CREATE USER 'Joao'@'localhost' IDENTIFIED BY 'dba';
CREATE USER 'Carlos'@'localhost' IDENTIFIED BY 'att';
CREATE USER 'Manoel'@'localhost' IDENTIFIED BY 'del';

GRANT SELECT ON teste1.* TO 'Manoel'@'localhost';

GRANT DELETE ON teste1.* TO 'Manoel'@'localhost';

SHOW GRANTS FOR 'Manoel'@'localhost'

