const express = require("express");
const app = express();

//Utilixar EJS como renderizador do HTML
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang",(req,res)=>{
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4},
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        nick: "Joy Boy",
        canal: "https://www.twitch.tv/joy__boy__",
        seguidores: 61,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,()=>{console.log("App rodando!");});