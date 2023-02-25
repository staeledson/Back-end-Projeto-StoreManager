const express = require('express');

const routes = express.Router();
const salesControllers = require('../controllers/salesControllers');
const { validateFields, validateRequisition } = require('../middlewares/salesMiddlewares');

routes.get('/', salesControllers.findAllProduts);

routes.get('/:id', salesControllers.findProductsById);

routes.post('/', validateFields, validateRequisition, salesControllers.insertSale);

module.exports = routes;