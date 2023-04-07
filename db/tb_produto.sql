CREATE DATABASE db_digital_store;

use db_digital_store;

CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    valor VARCHAR (255),
    quantidade VARCHAR(255) NOT NULL,
    cor VARCHAR(255),
    tamanho VARCHAR(255),
    descricao VARCHAR(255)
);

INSERT INTO tb_produto
    (nome, valor, quantidade, cor, tamanho, descricao)
VALUES
    ('blusa', 100, 50, 'verde', 'M', 'blusa verde claro com detalhes em branco');

ALTER TABLE tb_produto MODIFY COLUMN quantidade INT(11);

ALTER TABLE tb_produto MODIFY COLUMN valor INT(11);