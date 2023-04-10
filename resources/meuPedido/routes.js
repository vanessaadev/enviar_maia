const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_pedido';
const BASE_URL = '/pedidos';

app.get(`${BASE_URL}`, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post(`${BASE_URL}`, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO ${TABLE_NAME}
        (nome, estado, preco)
        VALUES 
        ('${corpo.nome}','${corpo.estado}','${corpo.preco}');
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch(`${BASE_URL}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${TABLE_NAME} SET
            nome='${req.body.nome || jaExiste[0].nome}',
            estado='${req.body.estado || jaExiste[0].estado}',
            preco='${req.body.preco || jaExiste[0].preco}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${TABLE_NAME} WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

module.exports = app;