const productsModels = require('../models/productsModels');

const validateFields = (req, res, next) => {
  const { body } = req;

  const productId = body.some((product) => !product.productId);
  if (productId) return res.status(400).json({ message: '"productId" is required' });

  const minimalQuantity = body.some((product) => product.quantity <= 0);
  if (minimalQuantity) {
 return res.status(422).json({
    message: '"quantity" must be greater than or equal to 1',
  }); 
}
  const quantity = body.some((product) => !product.quantity);
  if (quantity) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const valideIdSale = async (id) => {
const result = await productsModels.findProductsById(id);
if (result.length === 0) return { type: '404', message: 'Product not found' };
return { type: null, message: '' };
};

const validateRequisition = async (req, res, next) => {
  const sales = req.body;
  const database = await Promise.all(sales.map((sale) => valideIdSale(sale.productId)));
  const idNotFound = database.find((e) => e.type !== null);
  
  if (idNotFound) return res.status(404).json({ message: 'Product not found' });

  return next();
};

module.exports = {
  validateFields,
  validateRequisition,
};