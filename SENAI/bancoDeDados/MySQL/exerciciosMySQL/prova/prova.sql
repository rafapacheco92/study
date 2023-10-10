CREATE DATABASE ESCOLA_XPTO;

CREATE TABLE aluno(
idAluno INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
dt_Nascimento DATE,
cpf BIGINT UNIQUE,
PRIMARY KEY (idAluno)
);

CREATE TABLE inscricao(
idInscricao INT NOT NULL AUTO_INCREMENT,
aluno_id INT,
turma_id INT,
dt_inscricao DATE,
PRIMARY KEY (idInscricao)
);

CREATE TABLE turma(
idTurma INT NOT NULL AUTO_INCREMENT,
disciplina_id INT,
TURNO VARCHAR(45),
PRIMARY KEY (idTurma)
);

CREATE TABLE mensalidade(
idMensalidade INT NOT NULL AUTO_INCREMENT,
inscricao_id INT,
dt_vencimento DATE,
valor DECIMAL(10,2),
status_pagamento ENUM('Pago', 'Não Pago'),
PRIMARY KEY (idMensalidade)
);

CREATE TABLE disciplina(
idDisciplina INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(60),
qtd_creditos INT,
PRIMARY KEY (idDisciplina)
);

ALTER TABLE inscricao
ADD FOREIGN KEY (aluno_id)
REFERENCES aluno (idAluno),
ADD FOREIGN KEY (turma_id)
REFERENCES turma (idTurma);

ALTER TABLE turma
ADD FOREIGN KEY (disciplina_id)
REFERENCES disciplina (idDisciplina);

ALTER TABLE mensalidade
ADD FOREIGN KEY (inscricao_id)
REFERENCES inscricao (idInscricao);

INSERT INTO aluno
(nome, dt_Nascimento, cpf)
VALUES
('Rafael', '1992-12-19', '11111111111'),
('Rodrigo', '1999-11-12', '22222222222'),
('Saulo', '1985-01-18', '33333333333'),
('André', '1972-02-05', '44444444444'),
('João', '1965-04-28', '55555555555');

SELECT * FROM aluno;

INSERT INTO disciplina
(nome, qtd_creditos)
VALUES
('Geografia', '1'),
('Inglês', '2'),
('Matemática', '3'),
('Biologia', '4'),
('Química', '5');

SELECT * FROM disciplina;

INSERT INTO turma
(disciplina_id, TURNO)
VALUES
('1', 'matutino'),
('2', 'vespertino'),
('3', 'noturno'),
('4', 'matutino'),
('5', 'vespertino');

SELECT * FROM turma;

aluno_id INT,
turma_id INT,
dt_inscricao DATE,

INSERT INTO inscricao
(aluno_id, turma_id, dt_inscricao)
VALUES
('4', '1', '2020-01-02'),
('3', '2', '2020-01-02'),
('2', '3', '2020-01-02'),
('4', '1', '2020-06-02'),
('3', '2', '2020-06-02'),
('2', '3', '2020-06-02');

INSERT INTO inscricao
(dt_inscricao)
VALUES
('2020-01-02');

UPDATE inscricao 
SET dt_inscricao = '2020-06-02' 
WHERE idInscricao = '7';

SELECT * FROM inscricao;

inscricao_id INT,
dt_vencimento DATE,
valor DECIMAL(10,2),
status_pagamento ENUM('Pago', 'Não Pago'),

INSERT INTO mensalidade
(inscricao_id, dt_vencimento, valor, status_pagamento)
VALUES
('1', '2020-01-10', '550', 'Pago'),
('2', '2020-01-10', '540', 'Pago'),
('3', '2020-01-10', '530', 'Pago'),
('4', '2020-06-10', '580', 'Não Pago'),
('5', '2020-06-10', '570', 'Não Pago'),
('6', '2020-06-10', '560', 'Não Pago');

SELECT * FROM mensalidade;

SELECT inscricao.idInscricao, inscricao.dt_inscricao, inscricao.aluno_id, inscricao.turma_id from mensalidade
JOIN inscricao 
ON mensalidade.inscricao_id = inscricao.idInscricao
WHERE status_pagamento = 'Pago';



SELECT inscricao.idInscricao, mensalidade.dt_vencimento, mensalidade.valor from mensalidade
JOIN inscricao 
ON mensalidade.inscricao_id = inscricao.idInscricao
ORDER BY valor DESC;

SELECT * from inscricao
JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno
JOIN turma
ON inscricao.turma_id = turma.idTurma;

SELECT * from inscricao
LEFT JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno;

SELECT * from inscricao
RIGHT JOIN turma 
ON inscricao.turma_id = turma.idTurma;

SELECT * FROM inscricao
LEFT JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno
UNION
SELECT * FROM inscricao
RIGHT JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno;

SELECT inscricao.idInscricao, dt_inscricao AS 'data realização da inscrição', aluno.cpf AS 'cpf_aluno', aluno.nome AS 'nome_do_aluno' FROM inscricao
RIGHT JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno;

CREATE VIEW vw_inscricao_aluno AS
SELECT inscricao.idInscricao, dt_inscricao AS 'data realização da inscrição', aluno.cpf AS 'cpf_aluno', aluno.nome AS 'nome_do_aluno' FROM inscricao
RIGHT JOIN aluno 
ON inscricao.aluno_id = aluno.idAluno;

SELECT * FROM vw_inscricao_aluno