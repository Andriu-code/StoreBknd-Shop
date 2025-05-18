const express = require('express');

const { UsersController } = require('./controller')

const router = express.Router(); //manejar las rutas independientemente de la aplicacion

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers)   // http://localhost:3000/api/products/
        .get('/:id', UsersController.getUser)  // http://localhost:3000/api/products/23
        .post('/', UsersController.createUser)
        .put('/:id', UsersController.updateUser)
        .delete('/:id', UsersController.deleteUser)

    app.use('/api/users', router)         //configurar en una ruta que se configure
}