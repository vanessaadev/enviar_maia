const express = require('express');
const categoryRouter = require('./resources/category/routes');
const bannerRouter = require('./resources/banner/routes');
const marcaRouter = require('./resources/marca/routes');
const userRoutes = require('./resources/users/routes');
const colecoesRoutes = require('./resources/colecoesDestaque/routes');
const usuarioRoutes = require('./resources/usuario/routes');
const enderecoRoutes = require('./resources/endereco/routes');
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
app.use(usuarioRoutes);
app.use(enderecoRoutes);

app.listen(8000, () => {
    console.log('------------');
    console.log('---PRONTO---');
    console.log('------------');
});