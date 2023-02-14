const connection = require('./connection');

const findAllProducts = async () => {
  try {
    const allProduts = await connection.execute('SELECT * FROM StoreManager.products;');
    console.log(allProduts);
    if (!allProduts) return { type: '', message: 'erro no db' };
    return allProduts;
  } catch (error) {
    console.log('erro ao receber do db');
  }
};

const findProductsById = async (id) => {
  try {
    const productById = await connection.execute('SELECT * FROM StoreManager.products WHERE id = 1;');
    console.log('Id buscado: ', id);
    if (!productById) return { type: '', message: 'Produto não encontrado' };
    return productById;
  } catch (error) {
    console.log('erro ao receber do db');
  }
};

module.exports = {
  findAllProducts,
  findProductsById,
};
