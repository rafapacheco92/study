CREATE DATABASE sistema_banco;

CREATE TABLE cliente(
cod_cliente INT NOT NULL AUTO_INCREMENT,
nom_cliente VARCHAR(100),
num_cpf_cnpj VARCHAR(20),
num_celular VARCHAR(20),
des_rua VARCHAR(300),
des_numero_endereco INT,
des_bairro VARCHAR(45),
des_cidade VARCHAR(45),
des_estado VARCHAR(45),
des_cep INT,
PRIMARY KEY (cod_cliente)
);

CREATE TABLE categoria_cliente(
cod_categoria_cliente INT NOT NULL,
nom_categoria_cliente VARCHAR(100),
PRIMARY KEY (cod_categoria_cliente)
);

CREATE TABLE tipo_conta(
cod_tipo_conta INT NOT NULL,
des_tipo_conta VARCHAR(45),
PRIMARY KEY (cod_tipo_conta)
);

CREATE TABLE agencia(
num_agencia INT NOT NULL,
nome_agencia VARCHAR(100),
PRIMARY KEY (num_agencia)
);

CREATE TABLE conta(
num_conta INT NOT NULL,
val_saldo DECIMAL(20,2),
PRIMARY KEY (num_conta)
);

ALTER TABLE cliente
ADD COLUMN cod_categoria_cliente INT;

ALTER TABLE cliente
ADD FOREIGN KEY (cod_categoria_cliente)
REFERENCES categoria_cliente (cod_categoria_cliente);

ALTER TABLE conta
ADD COLUMN cod_cliente INT,
ADD COLUMN cod_tipo_conta INT,
ADD COLUMN num_agencia INT;

ALTER TABLE conta
ADD FOREIGN KEY (cod_cliente)
REFERENCES cliente (cod_cliente),
ADD FOREIGN KEY (cod_tipo_conta)
REFERENCES tipo_conta (cod_tipo_conta),
ADD FOREIGN KEY (num_agencia)
REFERENCES agencia (num_agencia);

ALTER TABLE cliente
ADD COLUMN email VARCHAR(45);

ALTER TABLE conta
ADD COLUMN cartao_credito VARCHAR(45);

ALTER TABLE categoria_cliente
ADD COLUMN descricao TEXT;

ALTER TABLE tipo_conta
MODIFY COLUMN des_tipo_conta TEXT;

ALTER TABLE agencia
MODIFY COLUMN nome_agencia VARCHAR(50);

ALTER TABLE cliente
RENAME COLUMN num_celular TO num_telefone;

ALTER TABLE conta
RENAME TO conta_bancaria;

ALTER TABLE conta_bancaria
DROP FOREIGN KEY conta_bancaria_ibfk_1;

DROP TABLE cliente;

ALTER TABLE categoria_cliente
MODIFY COLUMN cod_categoria_cliente INT NOT NULL AUTO_INCREMENT;

INSERT INTO categoria_cliente
(nom_categoria_cliente)
VALUES
('Private'),
('Exclusive'),
('Gold'),
('Basico');

SELECT * FROM categoria_cliente

INSERT INTO cliente
(nom_cliente, num_cpf_cnpj, num_telefone, des_rua, des_numero_endereco, des_bairro, des_cidade, des_estado, des_cep, cod_categoria_cliente, email)
VALUES
('Brock Lesnar', '111.111.111-11', '48-99988-8855', 'Rua AAA', '11', 'Bairro1', 'Cidade1', 'Estado1', '11111111', '1', 'brock@ufc.com'),
('Wanderlei Silva', '222.111.111-11', '48-98436-4562', 'Rua BBB', '22', 'Bairro2', 'Cidade2', 'Estado2', '11111222', '2', 'wand@pride.com'),
('Charles du Bronx', '333.111.111-11', '48-945636-4562', 'Rua CCC', '33', 'Bairro3', 'Cidade3', 'Estado3', '11111333', '3', 'dubronx@ufc.com'),
('Anthony Pettis', '444.111.111-11', '48-95426-4562', 'Rua DDD', '44', 'Bairro4', 'Cidade4', 'Estado4', '11111444', '4', 'pettis@ufc.com'),
('José Aldo', '555.111.111-11', '48-98236-4562', 'Rua EEE', '55', 'Bairro5', 'Cidade5', 'Estado5', '11111555', '1', 'aldo@ufc.com'),
('Marcus Buchecha', '666.111.111-11', '48-43236-4562', 'Rua FFF', '66', 'Bairro6', 'Cidade6', 'Estado6', '11111666', '2', 'buchecha@one.com'),
('Leandro Lo', '777.111.111-11', '48-12436-4562', 'Rua GGG', '77', 'Bairro7', 'Cidade7', 'Estado7', '11111777', '3', 'lo@ibjjf.com'),
('Paulo Myao', '888.111.111-11', '48-43436-4562', 'Rua HHH', '88', 'Bairro8', 'Cidade8', 'Estado8', '11111888', '4', 'myao@ibjjf.com'),
('Taynan Dalpra', '999.111.111-11', '48-77436-4562', 'Rua III', '99', 'Bairro9', 'Cidade9', 'Estado9', '11111999', '1', 'dalpra@ibjjf.com'),
('Mica Galvão', '000.111.111-11', '48-88436-4562', 'Rua JJJ', '00', 'Bairro0', 'Cidade0', 'Estado0', '11111000', '2', 'mica@ibjjf.com');

SELECT * FROM cliente