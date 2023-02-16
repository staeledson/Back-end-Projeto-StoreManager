const express = require('express');

const routes = express.Router();
const productsControllers = require('../controllers/productsControllers');

routes.get('/', productsControllers.findAllProduts);

routes.get('/:id', productsControllers.findProductsById);

// routes.get('/', productsControllers.findAllProduts);

module.exports = routes;