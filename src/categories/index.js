const express = require('express');

const { CategoriesController } = require('./controller')

const router = express.Router(); //manejar las rutas independientemente de la aplicacion

module.exports.CategoriesAPI = (app) => {
    router
        .get('/', CategoriesController.getCategories)
        .get('/:id', CategoriesController.getCategory)
        .post('/', CategoriesController.createCategory)
        .put('/:id', CategoriesController.updateCategory)
        .delete('/:id', CategoriesController.deleteCategory)

    app.use('/api/categories', router)         //configurar en una ruta que se configure
}