const productsServices = require('../services/productsServices');
const middlewares = require('../middlewares/salesMiddlewares');

const findAllProduts = async (_req, res) => {
  try {
    const { message, type } = await productsServices.findProducts();
    if (type) return res.status(404).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    console.log('erro ao receber dados do service');
  }
};

const findProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, type } = await productsServices.findProductsById(id);
    if (type) return res.status(404).json({ message });
    return res.status(200).json(...message);
  } catch (error) {
    console.log('erro ao receber do service');
  }
};

const insertProducts = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (name.length < 5) {
      return res.status(422)
        .json({ message: '"name" length must be at least 5 characters long' });
    }
    const retorno = await productsServices.insertProducts(name);
    return res.status(201).json({ ...retorno });
  } catch (error) {
    console.log('erro no controllers');
  }
};

const updateProductsById = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    
    if (!name) return res.status(400).json({ message: '"name" is required' });
    if (name.length < 5) {
      return res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
    }
    const validarProduto = await middlewares.validateIdSale(id);
    if (validarProduto.type !== null) res.status(404).json({ message: validarProduto.message });

    const { message } = await productsServices.updateProductsById({ id, name });

    return res.status(200).json({ id, name: message.name });
  } catch (error) {
    console.log('erro no controllers');
  }
};

module.exports = {
  findAllProduts,
  findProductsById,
  insertProducts,
  updateProductsById,
};