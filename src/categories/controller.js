const createError = require('http-errors');
const debug = require('debug')('app:module-cetegories-controller');

const { CategoriesService } = require('./services')
const { Response } = require('../common/response')

module.exports.CategoriesController = {
    getCategories: async (req, res) => {
        try {
            let categories = await CategoriesService.getAll();
            Response.success(res, 200, 'Categorias', categories);
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    getCategory: async (req, res) => {
        try {
            const { params: { id } } = req;
            let category = await CategoriesService.getById(id);
            if (!category) {
                Response.error(res, new createError.NotFound())
            } else {
                Response.success(res, 200, `Category ${id}`, category);
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    createCategory: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await CategoriesService.create(body);
                Response.success(res, 201, 'Categoria creada', insertedId)
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { params: { id } } = req;
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const category = await CategoriesService.update(id, body);
                Response.success(res, 201, `Categoria actualizada ${id}`, body)
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const { params: { id } } = req;
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const category = await CategoriesService.deleteCategory(id, body);
                Response.success(res, 201, `Categoria eliminada con id:  ${id}`);
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
    },
};