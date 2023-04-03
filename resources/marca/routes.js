const app = require('express').Router();
const database = require('../../connection/database');

app.get("/marca", async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_marca`)
    res.send(dados);
});

app.get("/marca/:id", async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_marca WHERE id='${req.params.id}'`)
    res.send(dados[0]);
});

app.post("/marca", async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
    INSERT INTO tb_marca ( nome, descricao)
    VALUES ('${corpo.nome}', '${corpo.descricao}')
    `);

    corpo.id = sql.insertId;
    res.send(corpo);
});

app.put("/marca/:id", async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
       SELECT * FROM tb_marca WHERE id= '${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    let sql = await database.execute(`
    UPDATE tb_marca SET 
        nome='${req.body.nome || jaExiste[0].nome}',
        descricao='${req.body.descricao || jaExiste[0].descricao}'
        
    WHERE id='${req.params.id}'    
    `);
    dados.id = req.params.id;

    res.send(dados);
});

app.patch("/marca/:id",  (req, res) => {
    res.send('ok');
})


module.exports = app;