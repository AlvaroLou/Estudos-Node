var http = require('http');

http.createServer(function (requisicao, resposta) {
  resposta.end("<h1>Bem vindo ao meu canal</h1><h3>Acessa la e da um follow pra ajudar</h3><h4><a href='https://www.twitch.tv/joy__boy__'>https://www.twitch.tv/joy__boy__</h4>");
}).listen(8181);
console.log("Meu servidor está rodando");