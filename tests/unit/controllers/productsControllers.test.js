const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const productsConstrollers= require('../../../src/controllers/productsControllers');
const productsServices = require('../../../src/services/productsServices');
const { allProducts, productById, productNotFound } = require('../models/productsModels.mock');
const { expect, use } = chai;

use(sinonChai);

describe('Testes da camada "Services" do product ', async function () {
  it('Verifica se retorna status 200 com a lista completa', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: '', message: allProducts };
    sinon.stub(productsServices, 'findProducts').resolves(retorno);

    await productsConstrollers.findAllProduts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    // expect(res.json).to.have.been.calledWith(retorno);
  });

  it('Verifica se retorna status 200 com a a busca por id correto', async function () {
    const res = {};
    const req = { params: {id: 1}};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: '', message: [productById] };

    sinon.stub(productsServices, 'findProductsById').resolves([productById]);

    await productsConstrollers.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    // expect(res.json).to.have.been.calledWith();
  });

  it('Verifica se retorna status 404 com a a busca por id não existente', async function () {
    const res = {};
    const req = { params: {id: 999}};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    const retorno = { type: 404, message: "Product not found" };

    sinon.stub(productsServices, 'findProductsById').resolves(retorno);

    await productsConstrollers.findProductsById(req, res);
    expect(res.status).to.have.been.calledWith(404);
  });
  
  afterEach(function () {
    sinon.restore();
  })
});