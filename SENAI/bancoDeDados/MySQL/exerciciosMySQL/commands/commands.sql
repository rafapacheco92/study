CREATE DATABASE INTERNET_SUPER_LTDA;

CREATE TABLE cliente(
idCliente INT NOT NULL AUTO_INCREMENT,
nome varchar(45),
cpf BIGINT UNIQUE,
PRIMARY KEY(idCliente));

CREATE TABLE mensalidade(
idMensalidade INT NOT NULL AUTO_INCREMENT,
dtVencimento DATE,
valor DECIMAL(10,2),
statusPagamento ENUM('Pago', 'Não Pago'),
cliente_id INT,
PRIMARY KEY(idMensalidade));

ALTER TABLE mensalidade
ADD FOREIGN KEY (cliente_id)
REFERENCES cliente (idCliente);

INSERT INTO cliente
(nome, cpf)
VALUES
('neymar', '12345678911'),
('marcio', '12345678912');

select * from cliente;

UPDATE cliente SET idCliente = 1 WHERE idCliente = 5;

INSERT INTO mensalidade
(dtVencimento, valor, statusPagamento, cliente_id)
VALUES
('2020-01-10', 550, 'Pago', '1'),
('2020-02-10', 560, 'Pago', '1'),
('2020-03-10', 570, 'Pago', '1'),
('2020-01-10', 450, 'Pago', '2'),
('2020-02-10', 460, 'Pago', '2'),
('2020-03-10', 470, 'Pago', '2'),
('2020-04-10', 680, 'Não Pago', '1'),
('2020-05-10', 780, 'Não Pago', '1');

SELECT COUNT(*) FROM mensalidade;

SELECT COUNT(statusPagamento) FROM mensalidade;

SELECT cliente.nome FROM cliente
JOIN mensalidade
ON cliente.idCliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, COUNT(mensalidade.statusPagamento) AS 'Total de Mensalidades' FROM cliente
JOIN mensalidade
ON cliente.idCliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, SUM(mensalidade.valor) AS 'Total de Mensalidades' FROM cliente
JOIN mensalidade
ON cliente.idCliente = mensalidade.cliente_id
GROUP BY cliente.nome;

SELECT cliente.nome, SUM(mensalidade.valor) AS 'Total de Mensalidades Pagas' FROM cliente
JOIN mensalidade
ON cliente.idCliente = mensalidade.cliente_id
WHERE mensalidade.statusPagamento = 'Pago'
GROUP BY cliente.nome

SELECT cliente.nome, AVG(mensalidade.valor) AS 'Média do valor das mensalidades' FROM cliente
JOIN mensalidade
ON cliente.idCliente = mensalidade.cliente_id
WHERE mensalidade.statusPagamento = 'Pago'
GROUP BY cliente.nome