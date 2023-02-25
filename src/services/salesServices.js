const salesModels = require('../models/salesModels');

const findAllSales = async () => {
  try {
    const [allProduts] = await salesModels.findAllSales();
    if (!allProduts) return { type: 'error', message: 'Product not found' };
    return { type: '', message: allProduts };
  } catch (error) {
    console.log('erro ao receber do Models');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await salesModels.findProductsById(id);
    if (productById.length === 0) return { type: 'error', message: 'Product not found' };
    return { type: '', message: [...productById] }; 
  } catch (error) {
    console.log('erro ao receber do models o produtos by ID');
  }
};

const insertSale = async (sales) => {
  // const productRequired = sales.every((sale) => sale.productId);
  // if (!productRequired) return { type: '400', message: '"productId" is required' }; 
  try {
    const saleId = await salesModels.getId();
    const itemForInsert = await salesModels.insertSale({ idSale: saleId, saleDetails: sales });
  
    return { type: '', message: itemForInsert };
  } catch (error) {
    console.log('erro ao receber do models');
  }
};

module.exports = {
  findAllSales,
  findProductsById,
  insertSale,
};