const createError = require('http-errors');
const debug = require('debug')('app:module-orders-controller');

const { OrdersService } = require('./services')
const { Response } = require('../common/response')

module.exports.OrdersController = {
    getOrders: async (req, res) => {
        try {
            let orders = await OrdersService.getAll();
            Response.success(res, 200, 'Lista de pedidos', orders);
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    getOrder: async (req, res) => {
        try {
            const { params: { id } } = req;
            let order = await OrdersService.getById(id);
            if (!order) {
                Response.error(res, new createError.NotFound())
            } else {
                Response.success(res, 200, `Pedido ${id}`, order);
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    createOrder: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await OrdersService.create(body);
                Response.success(res, 201, 'Orden registrada', insertedId)
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    updateOrder: async (req, res) => {
        try {
            const { params: { id } } = req;
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const order = await OrdersService.update(id, body);
                Response.success(res, 201, `Pedido actualizado ${id}`, body)
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const { params: { id } } = req;
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const order = await OrdersService.deleteOrder(id, body);
                Response.success(res, 201, `Pedido eliminado con id:  ${id}`);
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
};