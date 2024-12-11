CREATE DATABASE IF NOT EXISTS lojinha_db;

USE lojinha_db;


-- Tabela de clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    idade INT
);
-- Tabela de produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10, 2)
);

-- Tabela de Compras
CREATE TABLE compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id)
);

-- Tabela de Itens de Compra
CREATE TABLE itens_compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_compra) REFERENCES compras(id),
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

-- Inserindo dados na tabela 'clientes'
INSERT INTO clientes (nome, email) VALUES ('Amanda', 'Amandiafofinha@gmail.com');
INSERT INTO clientes (nome, email) VALUES ('FlaviaFessoraGenteBoa', 'Flaviafessora@hotmail.com');

-- Atualizando dados dos clientes
UPDATE clientes SET idade = 22 WHERE id = 1; 
UPDATE clientes SET idade = 26 WHERE id = 2; 

-- Inserindo dados na tabela 'compras'
INSERT INTO compras (id_cliente, total) VALUES (1, 23.99);


-- Inserindo dados na tabela 'itens_compras'
INSERT INTO itens_compras (id_compra, id_produto, quantidade, preco_unitario) 
VALUES (LAST_INSERT_ID(), 1, 2, 15.99);


-- Atualizando dados das compras

-- Inserindo dados na tabela 'produtos'
INSERT INTO produtos (nome, preco) VALUES ('Mucilon', 15.99);

-- Atualizando dados dos produtos
UPDATE produtos SET preco = 9.99 WHERE nome = 'Mucilon';



-- Conferindo dados
SELECT* from clientes;
SELECT * FROM produtos;
SELECT * from itens_compras;