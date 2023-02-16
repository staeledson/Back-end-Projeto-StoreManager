const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { expect } = require('chai');
const { allProducts, productById, productNotFound} = require('./productsModels.mock');
const productsModels = require('../../../src/models/productsModels');

describe('Testes da camada "Model" do product ', function () {
  it('Verifica se retorna a lista completa dos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const products = await productsModels.findAllProducts();
    expect(products).to.be.deep.equal(allProducts);
  });

  it('Verifica se retorna o esperado na pequisa por id dos produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productById]);

    const product = await productsModels.findProductsById(1);
    expect(product).to.be.deep.equal(productById);
  });
  
  afterEach(function () {
    sinon.restore();
  })
});