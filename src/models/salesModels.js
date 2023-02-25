const connection = require('./connection');

const findAllSales = async () => {
  try {
    const allSales = await
      connection.execute(`SELECT p.sale_id as saleId, s.date as date, p.product_id as productId,
      p.quantity as quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS p ON s.id = p.sale_id
      ORDER BY saleId, productId;`);
    return allSales;
  } catch (error) {
    console.log('erro ao acessar o DB na função findAllSales');
  }
};

const findProductsById = async (id) => {
  try {
    const [productById] = await
      connection.execute(
    `SELECT s.date as date, p.product_id as productId, p.quantity as quantity
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

const insertSale = async ({ saleDetails }) => {
  try {
    const id = await getId();
    await saleDetails.forEach(async (product) => {
      connection.execute(
        `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
        VALUE (?, ?, ?)`,
        [id, product.productId, product.quantity],
      );
      });
    return { id, itemsSold: saleDetails };
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
