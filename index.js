const express = require('express');
const debug = require('debug')('app:main');
const cors = require('cors');

const { Config } = require('./src/config/index');

const { ProductsAPI } = require('./src/products/index')
const { UsersAPI } = require('./src/users/index')
const { CategoriesAPI } = require('./src/categories/index')
const { OrdersAPI } = require('./src/orders/index')
const { PaymentsAPI } = require('./src/payments/index')
const { IndexAPI, NotFoundAPI } = require('./src/index/index')

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

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});