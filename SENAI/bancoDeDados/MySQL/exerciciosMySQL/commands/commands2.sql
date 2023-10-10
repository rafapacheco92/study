CREATE DATABASE senai;

CREATE TABLE aluno(
idAluno INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
PRIMARY KEY (idAluno));

CREATE TABLE inscricao(
idInscricao INT NOT NULL AUTO_INCREMENT,
aluno_id INT,
dtInscricao DATE,
PRIMARY KEY (idInscricao));

CREATE TABLE mensalidade(
idMensalidade INT NOT NULL AUTO_INCREMENT,
inscricao_id INT,
dtVencimento DATE,
valor DECIMAL(10,2),
statusPagamento ENUM('Pago', 'Não Pago'),
PRIMARY KEY (idMensalidade));

INSERT INTO aluno
(nome)
VALUES
('Baby Sharko'),
('Ludmilo'),
('CNPJoto'),
('Siririco'),
('Garrafo');


INSERT INTO inscricao
(aluno_id, dtInscricao)
VALUES
(4, '2020-01-02'),
(3, '2020-01-02'),
(2, '2020-01-02'),
(4, '2020-06-02'),
(3, '2020-06-02'),
(2, '2020-06-02');

INSERT INTO inscricao
(dtInscricao)
VALUES
('2020-06-02');

INSERT INTO mensalidade
(inscricao_id, dtVencimento, valor, statusPagamento)
VALUES
('1', '2020-01-10', '550', 'Pago'),
('2', '2020-01-10', '540', 'Pago'),
('3', '2020-01-10', '530', 'Pago'),
('4', '2020-06-10', '580', 'Não Pago'),
('5', '2020-06-10', '570', 'Não Pago'),
('6', '2020-06-10', '560', 'Não Pago');


SELECT inscricao.aluno_id, SUM(mensalidade.valor) FROM mensalidade
JOIN inscricao
ON mensalidade.inscricao_id = inscricao.idInscricao
GROUP BY inscricao.aluno_id;

SELECT aluno.nome, SUM(mensalidade.valor) FROM mensalidade
JOIN inscricao
ON mensalidade.inscricao_id = inscricao.idInscricao
JOIN aluno
ON inscricao.aluno_id = aluno.idAluno
GROUP BY inscricao.aluno_id;

SELECT SUM(mensalidade.valor) FROM mensalidade WHERE statusPagamento = 'Não Pago';

SELECT AVG(mensalidade.valor) FROM mensalidade;

SELECT MAX(mensalidade.valor) FROM mensalidade;

SELECT MIN(mensalidade.valor) FROM mensalidade;

SELECT MIN(mensalidade.valor) FROM mensalidade WHERE statusPagamento = 'Não Pago';

SELECT DISTINCT aluno.nome FROM inscricao
JOIN aluno
ON inscricao.aluno_id = aluno.idAluno
