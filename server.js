const express = require('express');
const categoryRouter = require('./resources/category/routes');
const bannerRouter = require('./resources/banner/routes');
const marcaRouter = require('./resources/marca/routes');
const userRoutes = require('./resources/users/routes');
const colecoesRoutes = require('./resources/colecoesDestaque/routes');
const clienteRoutes = require('./resources/cliente/routes');
const enderecoRoutes = require('./resources/endereco/routes');
const produtoRoutes = require('./resources/produto/routes')
const swagger = require('swagger-ui-express');
const docs = require('./docs.json');

const cors = require ('cors');

const app = express();

app.use(cors());

//criando rota da documentação
app.use('/documentacao', swagger.serve, swagger.setup(docs));

app.use(express.json());
app.use(categoryRouter);
app.use(bannerRouter);
app.use(marcaRouter);
app.use(userRoutes);
app.use(colecoesRoutes);
app.use(clienteRoutes);
app.use(enderecoRoutes);
app.use(produtoRoutes);

app.listen(8000, () => {
    console.log('------------');
    console.log('---PRONTO---');
    console.log('------------');
});