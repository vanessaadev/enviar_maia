const app = require('express').Router();
const database = require('../../connection/database');

app.get("/colecoes",  (req, res) => {
    res.send('ok');
});

app.get("/colecoes/:id",  (req, res) => {
    res.send('ok');
});

app.post("/colecoes", (req, res) => {
    res.send('ok');
});

app.put("/colecoes/:id", (req, res) => {
    res.send('ok');
})

app.delete("/marca/:id",  (req, res) => {
    res.send('ok');
})



module.exports = app;