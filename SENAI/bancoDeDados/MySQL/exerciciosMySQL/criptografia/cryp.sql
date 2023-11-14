CREATE DATABASE ESCOLA12365490;

CREATE TABLE estudante(
id_estudante INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
cpf BIGINT UNIQUE,
PRIMARY KEY (id_estudante));

DELIMITER //
CREATE PROCEDURE inserirDados(nomeA VARCHAR(45), cpfA BIGINT)
IF LENGTH(cpfA) != 11 THEN
SELECT 'O CPF DEVE CONTER 11 DIGITOS' AS Msg;
ELSE
INSERT INTO estudante (nome, cpf)
VALUES (nomeA, cpfA);
END IF;
//

CALL inserirDados('rafael2', 1234567890);
CALL inserirDados('rafael3', md5('12345678901'));

INSERT INTO estudante
(nome, cpf)
VALUES
(md5('rafael10'), 98765432101);

SELECT * FROM estudante;

DROP PROCEDURE inserirDados;

SELECT * FROM estudante
WHERE nome = md5('rafael10')