const express = require('express');
const { log } = require('shelljs/src/common');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Iniciando projeto

const iniciando () => {
  console.log('iniciando...');
};
iniciando();
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;