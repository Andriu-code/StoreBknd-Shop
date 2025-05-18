const express = require('express');
const debug = require('debug')('app:main');
const cors = require('cors');
const serverless = require("serverless-http");

const { Config } = require('../config/index');

const { ProductsAPI } = require('../products/index')
const { UsersAPI } = require('../users/index')
const { CategoriesAPI } = require('../categories/index')
const { OrdersAPI } = require('../orders/index')
const { PaymentsAPI } = require('../payments/index')
const { IndexAPI, NotFoundAPI } = require('../index/index')

const app = express();
app.use(cors());

app.use(express.json());

IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
CategoriesAPI(app);
OrdersAPI(app);
PaymentsAPI(app)
NotFoundAPI(app);

//modulos
module.exports.handler = serverless(app, {
    basePath: "/.netlify/functions/index"
});

/*app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});*/