CREATE TABLE tb_pagamento (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tb_pagamento (nome) VALUES ('Débito'), ('Crédito'), ('PIX'), ('Boleto');