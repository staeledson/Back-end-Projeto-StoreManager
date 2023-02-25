const sinon = require('sinon');
const { expect } = require('chai');
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices');
const { allProducts, productById, productNotFound } = require('../models/productsModels.mock');

describe('Testes da camada "Services" do product ', function () {
  it('Verifica se retorna a lista completa dos produtos', async function () {
    sinon.stub(productsModels, 'findAllProducts').resolves(allProducts);

    const products = await productsServices.findProducts();
    expect(products.type).to.be.deep.equal(null);
    expect(products.message).to.be.deep.equal([...allProducts]);
  });

  it('Verifica se retorna o esperado na pequisa por id dos produtos', async function () {
    sinon.stub(productsModels, 'findProductsById').resolves([productById]);

    const product = await productsServices.findProductsById(1);
    expect(product.type).to.be.deep.equal(null);
    expect(product.message).to.be.deep.equal([productById]);
  });

  it('Verifica se retorna o esperado na pequisa por id dos produtos não existente', async function () {
    sinon.stub(productsModels, 'findProductsById').resolves([]);

    const product = await productsServices.findProductsById(1);
    expect(product.type).to.be.deep.equal('error');
    expect(product.message).to.be.deep.equal('Product not found');
  });
  
  afterEach(function () {
    sinon.restore();
  })
});