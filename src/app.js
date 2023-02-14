const express = require('express');
const { findProductsById } = require('./controllers/productsControllers');
// const { log } = require('shelljs/src/common');
const productRoute = require('./routes/productsRoute');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.use('/', productRoute);
// app.get('/products', (req, res) => {
//   res.status(200).json('ok');
// });

module.exports = app;