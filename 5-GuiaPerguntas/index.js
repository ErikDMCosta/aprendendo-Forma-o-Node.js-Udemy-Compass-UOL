const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
  // res.send("Bem vindo ao meu site!");
  // res.render("index");
  // res.render("home");
  // var nome = "ÉrikDMCosta";
  // var lang = "JavaScript";
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;
  // res.render("principal/perfil");

  var produtos = [
    {nome: "Doritos",preco: 3.14},
    {nome: "Coca-cola",preco:5},
    {nome: "Leite",preco:1.45},
    {nome: "Carne", preco:15},
    {nome: "Redbull", preco: 6},
    {nome: "Nescau", preco: 4}
]

  res.render("perguntar",{
    // nome: "ÉrikDMCosta",
    // lang: "JavaScript",
    nome: nome,
    lang: lang,
    empresa: "Guia do Programador",
    inscritos: 8040,
    msg: exibirMsg,
    produtos: produtos
  });
});

app.listen(8080,()=>{console.log("App rodando!");})
