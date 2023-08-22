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