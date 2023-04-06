const app = require('express').Router();
const database = require('../../connection/database');

app.get('/usuario', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_informacoes_pessoais`);

    res.send(dados);
});

app.get('/usuario/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_informacoes_pessoais WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/usuario/:id', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_usuario (nome, cpf, email, celular)
        VALUES ('${corpo.nome}', '${corpo.cpf}', '${corpo.email}', '${corpo.celular}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch('/usuario/:id', async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_usuario WHERE id='${req.params.id}'
    `);

    //testando-se realmente existe algum banner com aquele id

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }


    await database.execute(`
        UPDATE tb_usuario SET
            nome='${req.body.nome || jaExiste[0].nome}',
            cpf='${req.body.cpf || jaExiste[0].cpf}',
            email='${req.body.email || jaExiste[0].email}',
            celular='${req.body.celular || jaExiste[0].celular}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete('/usuario/:id', async (req, res) => {
    await database.execute(`DELETE FROM tb_usuario WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});



module.exports = app;


