const express = require('express');

const { PaymentsController } = require('./controller')

const router = express.Router(); //manejar las rutas independientemente de la aplicacion

module.exports.PaymentsAPI = (app) => {
    router
        .get('/create-checkout-session', (req, res) => res.send("checkout session"))
        .get('/success', (req, res) => res.send("success"))
        .get('/cancel', (req, res) => res.send("cancel"))

    app.use('/api/payments', router)         //configurar en una ruta que se configure
}