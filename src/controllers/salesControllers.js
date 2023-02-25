const salesServices = require('../services/salesServices');

const findAllProduts = async (_req, res) => {
  try {
    const { message, type } = await salesServices.findAllSales();
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    console.log('erro ao receber dados do salesServices na funcao: findAllProduts');
  }
};

const findProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, type } = await salesServices.findProductsById(id);
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    console.log('erro ao receber dados do salesServices na funcao: findProductsById');
  }
};

const insertSale = async (req, res) => {
  try {
    const sales = req.body;
    const { type, message } = await salesServices.insertSale(sales);
    if (type) return res.status(type).json({ message });
    console.log(message);
    return res.status(201).json(message);
  } catch (error) {
    console.log('erro ao receber dados do salesServices na funcao: insertSale');
  }
};

module.exports = {
  findAllProduts,
  findProductsById,
  insertSale,
};
