CREATE TABLE tb_category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);

INSERT INTO tb_category (nome)
    -> VALUE ('camisetas');