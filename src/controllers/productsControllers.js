const productsServices = require('../services/productsServices');

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
module.exports = {
  findAllProduts,
  findProductsById,
};