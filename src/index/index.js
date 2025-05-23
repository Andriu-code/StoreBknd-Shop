const express = require('express');
const createError = require('http-errors');
const { Response } = require('../common/response');

module.exports.IndexAPI = (app) => {
    const router = express.Router();

    router.get("/", (req, res) => {
        const menu = {
            products: `https://${req.headers.host}/api/products`,
            users: `https://${req.headers.host}/api/users`,
            categories: `https://${req.headers.host}/api/categories`,
            orders: `https://${req.headers.host}/api/orders`,
        };

        Response.success(res, 200, "API Store", menu)
    });

    app.use("/", router)
};

module.exports.NotFoundAPI = (app) => {
    const router = express.Router();

    router.all("*", (req, res) => {
        Response.error(res, new createError.NotFound());
    })

    app.use("/", router)
}