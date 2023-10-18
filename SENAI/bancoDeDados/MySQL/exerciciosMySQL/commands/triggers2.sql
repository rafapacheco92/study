CREATE DATABASE posto;

CREATE TABLE combustivel(
idCombustivel INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
estoque INT,
preco INT DEFAULT '6',
PRIMARY KEY(idCombustivel)
);

ALTER TABLE combustivel
MODIFY COLUMN estoque DECIMAL(10,2) CHECK (estoque >= 0);

CREATE TABLE abastecimento(
idAbastecimento INT NOT NULL AUTO_INCREMENT,
quantidade INT,
combustivel_id INT,
PRIMARY KEY(idAbastecimento)
);

ALTER TABLE abastecimento
MODIFY COLUMN quantidade DECIMAL(10,2);

ALTER TABLE abastecimento
ADD COLUMN valorTotal DECIMAL(10,2);

ALTER TABLE abastecimento
ADD COLUMN preco INT DEFAULT '6';

ALTER TABLE abastecimento
ADD FOREIGN KEY (combustivel_id)
REFERENCES combustivel(idCombustivel);

INSERT INTO combustivel
(nome, estoque)
VALUES
('gasolina', 1000);

DELIMITER $$
CREATE TRIGGER attEstoque
AFTER INSERT ON abastecimento
FOR EACH ROW
BEGIN
UPDATE combustivel
SET combustivel.estoque = combustivel.estoque - NEW.quantidade
WHERE combustivel.idCombustivel= NEW.combustivel_id;
END
$$

INSERT INTO abastecimento
(quantidade, combustivel_id)
VALUES
(500, 1)

SELECT * FROM combustivel;

DELIMITER $$
CREATE TRIGGER corrigeEstoque
BEFORE DELETE ON abastecimento
FOR EACH ROW
BEGIN
UPDATE combustivel
SET combustivel.estoque = combustivel.estoque + OLD.quantidade
WHERE combustivel.idCombustivel= OLD.combustivel_id;
END
$$

DELETE FROM abastecimento WHERE idAbastecimento = 3;

INSERT INTO abastecimento
(quantidade, combustivel_id)
VALUES
(100, 1)

DELIMITER $$
CREATE TRIGGER fatura
BEFORE INSERT ON abastecimento
FOR EACH ROW
SET NEW.valorTotal = NEW.quantidade * NEW.preco
$$

DROP TRIGGER fatura

select * from abastecimento;