//const express = require('../reqHttp/node_modules/express'); //Importar de um diretório
const express = require('express');//Importando o express
const app = express(); //Iniciando o express

app.get("/", function (req, res) {//Faz uma requisição e manda uma resposta
  res.send("Bem vindo a minha live!");
});

app.get("/blog", function (req, res) {
  res.send("Bom vindo ao meu blog!");
});

app.get("/canal/youtube", function (req, res) {
  res.send("<h1>Bem vindo ao meu canal!</h1>");
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})