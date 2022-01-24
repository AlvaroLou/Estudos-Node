const express = require('express');
const app = express();

app.get('/artigo/:artigo?', (req, res) => {
  var artigo = req.params.artigo;
  if (artigo) {
    res.send("<h2>Artigo: " + artigo + "</h2>");
  } else {
    res.send("<h2>Sem artigo</h2>")
  }
})
app.get('/canal', (req, res) => {
  var canal = req.query["canal"];

  if (canal) {
    res.send(canal);
  } else {
    res.send("Nenhum canal");
  }
})

app.get('/ola/:nome/:empresa', function (req, res) {
  //REQ => Dados enviados pelo User
  //RES => Resposta que vai ser enviada para o user
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send('<h1>Olá ' + nome + ' do ' + empresa + '</h1>');
})

app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})