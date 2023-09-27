CREATE DATABASE estacionamento;

CREATE TABLE cliente(
idCliente INT NOT NULL AUTO_INCREMENT,
nomeCliente VARCHAR(45),
dataNascimento DATE,
PRIMARY KEY (idCliente)
);

CREATE TABLE veiculo(
idVeiculo INT NOT NULL AUTO_INCREMENT,
placa VARCHAR(45),
cor VARCHAR(30),
clienteId INT,
categoriaId INT,
PRIMARY KEY (idVeiculo)
);

CREATE TABLE categoria(
idCategoria INT NOT NULL AUTO_INCREMENT,
nomeCategoria VARCHAR(45),
descricao VARCHAR(100),
PRIMARY KEY (idCategoria)
);

ALTER TABLE categoria
MODIFY COLUMN nomeCategoria ENUM('sedan', 'hatch', 'suv');

CREATE TABLE estacionamento(
idEstacionamento INT NOT NULL AUTO_INCREMENT,
nomeEstacionamento VARCHAR(45),
dataEntrada DATE,
dataSaida DATE,
horaEntrada TIME,
horaSaida TIME,
veiculoId INT,
PRIMARY KEY (idEstacionamento)
);

ALTER TABLE veiculo
ADD FOREIGN KEY (clienteId)
REFERENCES cliente (idCliente),
ADD FOREIGN KEY (categoriaId)
REFERENCES categoria (idCategoria);

ALTER TABLE estacionamento
ADD FOREIGN KEY (veiculoId)
REFERENCES veiculo (idVeiculo);

INSERT INTO cliente
(nomeCliente, dataNascimento)
VALUES
('Rafael', '1992-12-19'),
('Rodrigo', '1999-11-12'),
('Saulo', '1985-01-18');


INSERT INTO categoria
(nomeCategoria, descricao)
VALUES
('1', 'médio'),
('2', 'pequeno'),
('3', 'grande');

INSERT INTO veiculo
(placa, cor, clienteId, categoriaId)
VALUES
('AAA-1111', 'azul', '1', '1'),
('BBB-2222', 'amarelo', '2', '2'),
('CCC-3333', 'verde', '3', '3'),
('DDD-4444', 'vermelho', '1', '1'),
('EEE-5555', 'laranja', '2', '2');

INSERT INTO veiculo
(placa, cor)
VALUES
('AAA-1112', 'azul');

INSERT INTO estacionamento
(nomeEstacionamento, dataEntrada, dataSaida, horaEntrada, horaSaida, veiculoId)
VALUES
('Capao Redondo', '2022-01-22', '2023-09-25', '11:11:11', '11:11:14', '4'),
('Baixada Francesa', '2023-01-22', '2023-05-25', '11:11:12', '11:11:15', '5'),
('Torres de Lima', '2022-12-22', '2023-09-01', '11:11:13', '11:11:16', '6');


SELECT * FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente
JOIN categoria
ON veiculo.categoriaId = categoria.idCategoria;

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.clienteId = cliente.idCliente;

SELECT * FROM veiculo
RIGHT JOIN categoria
ON veiculo.categoriaId = categoria.idCategoria;

SELECT * FROM veiculo
LEFT JOIN cliente
ON veiculo.clienteId = cliente.idCliente
UNION
SELECT * FROM veiculo
RIGHT JOIN cliente
ON veiculo.clienteId = cliente.idCliente;

SELECT veiculo.idVeiculo, veiculo.placa, veiculo.cor, cliente.nomeCliente FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente;

CREATE VIEW vw_veiculo_cliente AS
SELECT veiculo.idVeiculo, veiculo.placa, veiculo.cor, cliente.nomeCliente FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente;

SELECT veiculo.placa, cliente.nomeCliente FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente;

SELECT cliente.nomeCliente, cliente.dataNascimento from veiculo
JOIN cliente 
ON veiculo.clienteId = cliente.idCliente
WHERE veiculo.placa = 'AAA-1111';

SELECT veiculo.placa, veiculo.cor FROM estacionamento
JOIN veiculo
ON estacionamento.veiculoId = veiculo.idVeiculo
WHERE estacionamento.veiculoId = '2';

SELECT estacionamento.dataEntrada, estacionamento.dataSaida FROM estacionamento
JOIN veiculo
ON estacionamento.veiculoId = veiculo.idVeiculo
WHERE veiculo.placa = 'AAA-1111';

SELECT estacionamento.dataEntrada FROM estacionamento
JOIN veiculo
ON estacionamento.veiculoId = veiculo.idVeiculo
WHERE veiculo.cor = 'azul';

SELECT cliente.nomeCliente FROM veiculo
JOIN cliente
ON veiculo.clienteId = cliente.idCliente
WHERE veiculo.categoriaId = '1' OR '2'