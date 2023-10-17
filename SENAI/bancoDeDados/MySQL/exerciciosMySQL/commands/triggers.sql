CREATE DATABASE TRIGGERES;

CREATE TABLE Produto(
idProduto INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
preco INT,
estoque INT,
PRIMARY KEY(idProduto));

CREATE TABLE Pedido(
idPedido INT NOT NULL AUTO_INCREMENT,
dataHorario DATETIME,
quantidade INT,
produto_id INT,
PRIMARY KEY(idPedido));

ALTER TABLE Pedido
ADD FOREIGN KEY (produto_id)
REFERENCES produto(idProduto);

INSERT INTO Produto
(nome, preco, estoque)
VALUES
('caderno', '19.00', '200'),
('caneta', '5.00', '500'),
('lapis', '3.00', '1000');

DELIMITER $$
CREATE TRIGGER attEstoque
AFTER INSERT ON Pedido
FOR EACH ROW
BEGIN
UPDATE Produto
SET Produto.estoque = Produto.estoque - new.quantidade
WHERE Produto.idProduto = new.produto_id;
END
$$


INSERT INTO Pedido
(dataHorario, quantidade, produto_id)
VALUES
('2023-10-16 19:30:00', '50', '1');

SELECT * FROM Produto;

CREATE TABLE pedidoDois(
idPedido INT NOT NULL AUTO_INCREMENT,
produto VARCHAR(45),
preco INT,
quantidade INT,
valorTotal INT,
valorDesconto INT,
PRIMARY KEY(idPedido));

DELIMITER $$
CREATE TRIGGER attTotal
BEFORE INSERT ON pedidoDois
FOR EACH ROW
BEGIN
SET NEW.valorTotal = NEW.quantidade * NEW.preco;
END;
$$

DELIMITER $$
CREATE TRIGGER attDesc
BEFORE INSERT ON pedidoDois
FOR EACH ROW
BEGIN
SET NEW.valorDesconto = NEW.valorTotal * 0.95;
END;
$$

INSERT INTO pedidoDois
(produto, preco, quantidade)
VALUES
('penal', '20', '5');

SELECT * FROM pedidoDois;