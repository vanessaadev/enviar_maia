CREATE DATABASE db_digital_store;

use db_digital_store;

CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    valor INT(11),
    quantidade INT(11) NOT NULL,
    cor VARCHAR(255),
    tamanho VARCHAR(255),
    descricao VARCHAR(255)
);

ALTER TABLE tb_produto MODIFY COLUMN quantidade INT(11);

ALTER TABLE tb_produto MODIFY COLUMN valor INT(11);

INSERT INTO tb_produto
    (nome, valor, quantidade, cor, tamanho, descricao)
VALUES
    ('blusa', 100, 50, 'verde', 'M', 'blusa verde claro com detalhes em branco');

INSERT INTO tb_produto
    (nome, valor, quantidade, cor, tamanho, descricao)
VALUES
    ('sapato', 150, 50, 'preto', '40', 'sapatos da nike');

INSERT INTO tb_produto
    (nome, valor, quantidade, cor, tamanho, descricao)
VALUES
    ('vestido', 120, 50, 'rosa', 'G', 'vestidos longos e mangas longas');



