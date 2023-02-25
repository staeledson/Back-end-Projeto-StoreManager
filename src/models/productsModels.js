const connection = require('./connection');

const findAllProducts = async () => {
  try {
    const [allProduts] = await
      connection.execute('SELECT * FROM StoreManager.products ORDER BY id');
    return allProduts;
  } catch (error) {
    console.log('erro ao receber dados do DB na funcao: findAllProducts');
  }
};

const findProductsById = async (id) => {
  try {
    const [productById] = await
      connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
    return productById;
  } catch (error) {
    console.log('erro ao receber dados do DB na funcao: findProductsById');
  }
};

const insertProducts = async (name) => {
  try {
     const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
    );
    return { id: insertId, name };
  } catch (error) {
    console.log('erro ao receber dados do DB na funcao: insertProducts');
  }
};

const updateProductsById = async ({ id, name }) => {
  try {
    await connection.execute(
        'UPDATE StoreManager.products SET name = ? WHERE id = ?',
        [name, id],
    );
    return { id, name };
  } catch (error) {
    console.log('erro ao receber dados do DB na funcao: updateProductsById');
  }
};

const deleteProduct = async (id) => {
  try {
    await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?',
      [id],
    );
  } catch (error) {
    console.log('erro ao receber dados do DB na funcao: deleteProduct');
  }
};

module.exports = {
  findAllProducts,
  findProductsById,
  insertProducts,
  updateProductsById,
  deleteProduct,
};
