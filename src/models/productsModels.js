const connection = require('./connection');

const findAllProducts = async () => {
  try {
    const [allProduts] = await
      connection.execute('SELECT * FROM StoreManager.products ORDER BY id');
    return allProduts;
  } catch (error) {
    console.log('erro ao receber do DB');
  }
};

const findProductsById = async (id) => {
  try {
    const [productById] = await
      connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
    return productById;
  } catch (error) {
    console.log('erro ao receber do db');
  }
};

module.exports = {
  findAllProducts,
  findProductsById,
};
