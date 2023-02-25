const productsModels = require('../models/productsModels');

const findProducts = async () => {
  try {
    const allProduts = await productsModels.findAllProducts();
    if (allProduts.length === 0) return { type: 'error', message: 'Product not found' };
    return {
      type: '', message: [...allProduts],
    };
  } catch (error) {
    console.log('erro ao receber dados do models');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await productsModels.findProductsById(id);
    if (productById.length === 0) return { type: 'error', message: 'Product not found' };
    return { type: '', message: [...productById] }; 
  } catch (error) {
    console.log('erro ao receber do models o produtos by ID');
  }
};

const insertProducts = async (product) => {
  try {
    const retorno = await productsModels.insertProducts(product);
    return retorno;
  } catch (error) {
    console.log('erro no Services');
  }
};

const updateProductsById = async ({ id, name }) => {
  try {
    const retorno = await productsModels.updateProductsById({ id, name });
    return { type: '', message: retorno };
  } catch (error) {
    console.log('erro no Services');
  }
};

module.exports = {
  findProducts,
  findProductsById,
  insertProducts,
  updateProductsById,
};
