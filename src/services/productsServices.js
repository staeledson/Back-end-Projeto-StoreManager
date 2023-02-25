const productsModels = require('../models/productsModels');

const findProducts = async () => {
  try {
    const allProduts = await productsModels.findAllProducts();
    if (allProduts.length === 0) return { type: 'error', message: 'Product not found' };
    return {
      type: null, message: [...allProduts],
    };
  } catch (error) {
    console.log('erro ao receber dados do productsModels na funcao: findProducts');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await productsModels.findProductsById(id);
    if (productById.length === 0) return { type: 'error', message: 'Product not found' };
    return { type: null, message: [...productById] }; 
  } catch (error) {
    console.log('erro ao receber dados do productsModels na funcao: findProductsById');
  }
};

const insertProducts = async (product) => {
  try {
    const retorno = await productsModels.insertProducts(product);
    return retorno;
  } catch (error) {
    console.log('erro ao receber dados do productsModels na funcao: insertProducts');
  }
};

const updateProductsById = async ({ id, name }) => {
  try {
    const retorno = await productsModels.updateProductsById({ id, name });
    return { type: null, message: retorno };
  } catch (error) {
    console.log('erro ao receber dados do productsModels na funcao: updateProductsById');
  }
};

const deleteProduct = async (id) => {
  try {
    const itemForDelete = await findProductsById(id);
    if (itemForDelete.type !== null) return { type: '404', message: 'Product not found' };

    await productsModels.deleteProduct(id);
    return { type: 204, message: '' };
  } catch (error) {
    console.log('erro ao receber dados do productsModels na funcao: deleteProduct');
  }
};

module.exports = {
  findProducts,
  findProductsById,
  insertProducts,
  updateProductsById,
  deleteProduct,
};
