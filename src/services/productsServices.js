const productsModels = require('../models/productsModels');

const findProducts = async () => {
  try {
    const allProduts = await productsModels.findAllProducts();
    if (!allProduts) return { type: 'erro', message: 'erro no service' };
    return { type: '', message: allProduts };
  } catch (error) {
    console.log('erro ao receber do models');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await productsModels.findProductsById(id);
    if (!productById) return { type: 'erro', message: 'erro no service' };
    return { type: '', message: productById }; 
  } catch (error) {
    console.log('erro ao receber do models o produtos by ID');
  }
};

module.exports = {
  findProducts,
  findProductsById,
};
