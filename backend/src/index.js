const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ msg: 'Hello Paula'});
})

app.listen(3333, () => {
  console.log('👽 Servidor rodando na porta 3333')
});