enderecoconst app = require('express').Router();
const database = require('../../connection/database');

app.get('/endereco', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_informacoes_entrega`);

    res.send(dados);
});

app.get('/endereco/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_informacoes_entrega WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/endereco/:id', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_endereco (endereco, bairro, cidade, cep, complemento)
        VALUES ('${corpo.endereco}', '${corpo.bairro}', '${corpo.cidade}', '${corpo.cep}' '${corpo.complemento}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch('/informacoes_entrega/:id', async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_endereco WHERE id='${req.params.id}'
    `);

    //testando-se realmente existe algum banner com aquele id

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }


    await database.execute(`
        UPDATE tb_endereco SET
            endereco='${req.body.endereco || jaExiste[0].endereco}',
            bairro='${req.body.bairro || jaExiste[0].bairro}',
            cidade='${req.body.cidade || jaExiste[0].cidade}',
            cep='${req.body.cep || jaExiste[0].cep}',
            complemento='${req.body.complemento || jaExiste[0].complemento}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete('/endereco/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_endereco WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});



module.exports = app;