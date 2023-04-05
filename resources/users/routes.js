const app = require("express").Router();
const database = require("../../connection/database");

app.get("/users", async (req, res) => {
    let lista = await database.execute(`
       SELECT * FROM tb_users,
    `);
    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
    let response = await database.execute(`
        INSERT INTO tb_users
        (nome, email, senha)
        VALUES
        ('${req.body.nome}','${req.body.email}','${req.body.senha}');
    `);

    await database.execute(`
        UPDATE tb_users SET token = '${req.body.senha}'_${response.insertId}';
    `);
});



module.exports = app;