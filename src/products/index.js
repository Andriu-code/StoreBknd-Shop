const express = require('express');

const { ProductsController } = require('./controller')

const router = express.Router(); //manejar las rutas independientemente de la aplicacion

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)   // http://localhost:3000/api/products/
        .get('/report', ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)  // http://localhost:3000/api/products/23
        .post('/', ProductsController.createProduct)
        .put('/:id', ProductsController.updateProduct)
        .delete('/:id', ProductsController.deleteProduct)
    //update
    //delete

    app.use('/api/products', router)         //configurar en una ruta que se configure
}