const productsModels = require('../models/productsModels');

const findProducts = async () => {
  try {
    const allProduts = await productsModels.findAllProducts();
    if (allProduts.length === 0) return { type: 'error', message: 'Product not found' };
    return { type: '', message: allProduts };
  } catch (error) {
    console.log('erro ao receber dados do models');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await productsModels.findProductsById(id);
    if (productById.length === 0) return { type: 'error', message: 'Product not found' };
    return { type: '', message: productById }; 
  } catch (error) {
    console.log('erro ao receber do models o produtos by ID');
  }
};

module.exports = {
  findProducts,
  findProductsById,
};
