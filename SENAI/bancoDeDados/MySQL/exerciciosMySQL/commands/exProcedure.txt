CREATE DATABASE escola;

CREATE TABLE estudante(
id_estudante INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
matricula INT,
curso VARCHAR(45),
cidade VARCHAR(45),
PRIMARY KEY (id_estudante));

SELECT * FROM estudante;

DELIMITER $$
CREATE PROCEDURE estudante_select()
BEGIN
SELECT * FROM estudante;
END
$$

CALL estudante_select()

SHOW CREATE PROCEDURE estudante_select

DELIMITER $$
CREATE PROCEDURE id_estudante_select(idA INT)
BEGIN
SELECT * FROM estudante
WHERE id_estudante = idA;
END
$$

CALL id_estudante_select(2)

SHOW CREATE PROCEDURE estudante_select

DELIMITER $$
CREATE PROCEDURE inserir_estudante(
p_nome VARCHAR(45),
p_matricula INT,
p_curso VARCHAR(45),
p_cidade VARCHAR(45)
)
BEGIN
INSERT INTO estudante (nome, matricula, curso, cidade)
VALUES (p_nome, p_matricula, p_curso, p_cidade);
END $$
DELIMITER ;

CALL inserir_estudante('João', 12, 'Ciência da Computação', 'São Paulo');
CALL inserir_estudante('Pedro', 34, 'Ciência da Computação', 'São Pedro');
CALL inserir_estudante('Maria', 56, 'Ciências', 'São José');
CALL inserir_estudante('Antonio', 78, 'Ciências', 'São João');
CALL inserir_estudante('José', 90, 'Computação', 'São Bonifácio');

CALL estudante_select()

DELIMITER $$
CREATE PROCEDURE updateNshow(
p_id INT,
p_nome VARCHAR(45),
p_matricula INT,
p_curso VARCHAR(45),
p_cidade VARCHAR(45)
)
BEGIN
UPDATE estudante
SET nome = p_nome, matricula = p_matricula, curso = p_curso, cidade = p_cidade
WHERE id_estudante = p_id;
CALL estudante_select();
END $$
DELIMITER ;

CALL updateNshow(1, 'Rafael', '666', 'Sistema', 'Florianópolis');

DELIMITER $$
CREATE PROCEDURE deleteNshow(
p_id INT
)
BEGIN
DELETE FROM estudante
WHERE id_estudante = p_id;
CALL estudante_select();
END $$
DELIMITER ;

CALL deleteNshow(1);

DELIMITER $$
CREATE PROCEDURE countStudents(
p_curso VARCHAR(45)
)
BEGIN
SELECT COUNT(*) FROM estudante
WHERE curso = p_curso;
END $$
DELIMITER ;

CALL countStudents('Ciências')