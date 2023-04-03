const app = require('express').Router();
const database = require('../../connection/database');

app.get("/marca", async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_marca`)
    res.send(dados);
});

app.get("/marca/:id", async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_marca WHERE id='${req.params.id}'`)
    res.send(dados[0]);
})

app.post("/marca/:id", async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
    INSERT INTO marca_produto ( nome, descricao)
    VALUES ('${corpo.nome}', '${corpo.descricao}')
    `);

    corpo.id = sql.insertId;
    res.send(corpo);
})

app.put("/marca/:id",  (req, res) => {
    res.send('ok');
})

app.patch("/marca/:id",  (req, res) => {
    res.send('ok');
})


module.exports = app;