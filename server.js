const express = require('express');
const categoryRouter = require('./resources/category/routes')
const bannerRouter = require('./resources/banner/routes')
const marcaRouter = require('./resources/marca/routes')
const userRouter = require('./resources/user/routes')

const cors = require ('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(categoryRouter);
app.use(bannerRouter);
app.use(marcaRouter);
app.use(userRouter);

app.listen(8000, () => {
    console.log('------------');
    console.log('---PRONTO---');
    console.log('------------');
});