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

const insertProducts = async (name) => {
  try {
    console.log('insert Models: ', name);
     const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
    );
    return { id: insertId, name };
  } catch (error) {
    console.log('erro no Models');
  }
};

module.exports = {
  findAllProducts,
  findProductsById,
  insertProducts,
};
