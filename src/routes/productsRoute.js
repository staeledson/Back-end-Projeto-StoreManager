const express = require('express');

const routes = express.Router();
const productsControllers = require('../controllers/productsControllers');

routes.get('/', productsControllers.findAllProduts);

routes.get('/:id', productsControllers.findProductsById);

routes.post('/', productsControllers.insertProducts);

routes.put('/:id', productsControllers.updateProductsById);

module.exports = routes;