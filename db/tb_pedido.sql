
CREATE TABLE tb_pedido (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  nome VARCHAR( 255 ) NOT NULL ,
  estado VARCHAR(255) NOT NULL
);

SELECT tb_produto . * FROM tb_produto
  INNER JOIN tb_pedido ON tb_produto . produto_id = tb_produto.id
  ORDER BY `produtos`.`nome` ASC;

INSERT INTO tb_pedido
    (nome, estado)
VALUES
    ('vestido', 'pedido em andamento');
    
INSERT INTO tb_pedido
    (nome, estado, preco)
VALUES
    ('sapato', 'finalizado');

ALTER TABLE tb_pedido
CHANGE produto_nome nome VARCHAR(200);

ALTER TABLE tb_pedido ADD preco int(11);

ALTER TABLE tb_pedido ADD FK_P INT;

SELECT * FROM tb_produto INNER JOIN tb_pedido ON tb_produto.nome = tb_pedido.nome;

ALTER TABLE tb_pedido ADD CONSTRAINT FK_P FOREIGN KEY (FK_P) REFERENCES tb_produto(id);  
