const salesModels = require('../models/salesModels');

const findAllSales = async () => {
  try {
    const [allProduts] = await salesModels.findAllSales();
    if (!allProduts) return { type: '404', message: 'Sale not found' };
    return { type: '', message: allProduts };
  } catch (error) {
    console.log('erro ao receber dados do salesModels na funcao: findAllSales');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await salesModels.findProductsById(id);
    if (productById.length === 0) return { type: '404', message: 'Sale not found' };
    return { type: '', message: [...productById] }; 
  } catch (error) {
    console.log('erro ao receber dados do salesModels na funcao: findProductsById');
  }
};

const insertSale = async (sales) => {
  try {
    const itemForInsert = await salesModels.insertSale({ saleDetails: sales });

    return { type: '', message: itemForInsert };
  } catch (error) {
    console.log('erro ao receber dados do salesModels na funcao: insertSale');
  }
};

module.exports = {
  findAllSales,
  findProductsById,
  insertSale,
};
