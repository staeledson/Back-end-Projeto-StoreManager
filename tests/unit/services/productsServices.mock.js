const productById = {
  type: '',
  message: [
  {
    id: 1,
    name: "Martelo de Thor"
  },
]
};


const allProducts = {
  type: '',
  message: [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Capa da invisibilidade"
  }
]
};

const productNotFound = { type: 'error', message: 'Product not found' };

module.exports = { productById, allProducts, productNotFound };
