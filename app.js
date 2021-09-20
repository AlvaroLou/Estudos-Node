const express = require('express'); //Importando o express
const app = express(); //Iniciando o express

var mostrarSite = true;
const site = "https://www.twitch.tv/joy__boy__";

console.log("Hello World!!");
console.log("Meu nome é Álvaro")

if (mostrarSite) {//MOSTRA SITE
  console.log(site);//PRINTA SITE
}

console.log("E eu estou aprendendo Node.js com o Guia do Programador")