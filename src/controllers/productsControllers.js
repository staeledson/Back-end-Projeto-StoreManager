const productsServices = require('../services/productsServices');

const findAllProduts = async (_req, res) => {
  try {
    const { message } = await productsServices.findProducts();
     return res.status(200).json(message);
  } catch (error) {
    console.log('erro ao receber do service');
  }
};

const findProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { message } = await productsServices.findProducts(id);
    return res.status(200).json(message);
  } catch (error) {
    console.log('erro ao receber do service');
  }
};
module.exports = {
  findAllProduts,
  findProductsById,
};