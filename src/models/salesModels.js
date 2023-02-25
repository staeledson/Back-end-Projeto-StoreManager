const connection = require('./connection');

const findAllSales = async () => {
  try {
    const [allProduts] = await
      connection.execute(`SELECT p.sale_id, s.date, p.product_id, p.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p ON s.id = p.sale_id
      ORDER BY p.sale_id, p.product_id;`);
    return allProduts;
  } catch (error) {
    console.log('erro ao acessar o DB na função findAllSales');
  }
};

const findProductsById = async (id) => {
  try {
    const [productById] = await
      connection.execute(
    `SELECT s.date, p.product_id, p.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p ON s.id = p.sale_id
    WHERE s.id = ? ORDER BY p.sale_id, p.product_id;`,
    [id],
      );
    return productById;
  } catch (error) {
    console.log('erro ao acessar o DB na função findProductsById');
  }
};

const getId = async () => {
  try {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.sales (date) VALUE (?);',
      [date],
    );
    return insertId;
  } catch (error) {
    console.log('erro ao acessar o DB na função getId');
  }
};

const insertSale = async ({ idSale, saleDetails }) => {
  try {
    console.log(saleDetails);
      saleDetails.forEach((product) => {
          connection.execute(
              `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
              VALUE (?, ?, ?)`,
              [idSale, product.productId, product.quantity],
          );
      });
  
      return { id: idSale, itemsSold: saleDetails };
  } catch (error) {
    console.log('erro ao acessar o DB na função insertSale');
  }
};

module.exports = {
  findAllSales,
  findProductsById,
  insertSale,
  getId,
};
