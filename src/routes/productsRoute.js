const express = require('express');

const routes = express.Router();
const productsControllers = require('../controllers/productsControllers');

routes.get('/products', productsControllers.findAllProduts);

routes.get('/products/:id', productsControllers.findProductsById);

module.exports = routes;