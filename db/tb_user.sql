CREATE TABLE tb_user (
    id INT(50) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    senha VARCHAR(50),
    token VARCHAR(50) NULL
);