const express = require('express');

const { OrdersController } = require('./controller')

const router = express.Router(); //manejar las rutas independientemente de la aplicacion

module.exports.OrdersAPI = (app) => {
    router
        .get('/', OrdersController.getOrders)
        .get('/:id', OrdersController.getOrder)
        .post('/', OrdersController.createOrder)
        .put('/:id', OrdersController.updateOrder)
        .delete('/:id', OrdersController.deleteOrder)

    app.use('/api/orders', router)         //configurar en una ruta que se configure
}