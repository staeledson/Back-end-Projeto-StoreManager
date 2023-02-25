const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const salesConstrollers= require('../../../src/controllers/salesControllers');
const salesServices = require('../../../src/services/salesServices');
const { allProducts, productById, productNotFound } = require('../models/productsModels.mock');
const { expect, use } = chai;

use(sinonChai);

describe('Testes da camada "Services" do sales ', async function () {
  it('Verifica se retorna status 200 com a lista completa', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: '', message: allProducts };
    sinon.stub(salesServices, 'findAllSales').resolves(retorno);

    await salesConstrollers.findAllProduts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    // expect(res.json).to.have.been.calledWith(retorno);
  });

  it('Verifica se retorna status 200 com a a busca por id correto', async function () {
    const res = {};
    const req = { params: {id: 1}};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: '', message: [productById] };

    sinon.stub(salesServices, 'findProductsById').resolves([productById]);

    await salesConstrollers.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    // expect(res.json).to.have.been.calledWith();
    });
  
  it('Verifica se retorna status 404 com a a busca por id não existente', async function () {
    const res = {};
    const req = { params: {id: 999}};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: 404, message: "Product not found" };

    sinon.stub(salesServices, 'findProductsById').resolves(retorno);

    await salesConstrollers.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });
  
  afterEach(function () {
    sinon.restore();
  })
});