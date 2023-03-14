const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
// Database

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rotas
// app.get("/:nome/:lang", (req, res) => {
app.get("/", (req, res) => {
  // res.send("Bem vindo ao meu site!");
  // res.render("index");
  // res.render("home");
  // var nome = "ÉrikDMCosta";
  // var lang = "JavaScript";
  // var nome = req.params.nome;
  // var lang = req.params.lang;
  // var exibirMsg = false;
  // res.render("principal/perfil");

  //   var produtos = [
  //     {nome: "Doritos",preco: 3.14},
  //     {nome: "Coca-cola",preco:5},
  //     {nome: "Leite",preco:1.45},
  //     {nome: "Carne", preco:15},
  //     {nome: "Redbull", preco: 6},
  //     {nome: "Nescau", preco: 4}
  // ]

  // res.render("index",{
  //   // nome: "ÉrikDMCosta",
  //   // lang: "JavaScript",
  //   nome: nome,
  //   lang: lang,
  //   empresa: "Guia do Programador",
  //   inscritos: 8040,
  //   msg: exibirMsg,
  //   produtos: produtos
  // });
  res.render("index");
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  // res.send("Formulário recebido! titulo " + titulo + " " + " descricao " + descricao);
  // '' INSERT INTO perguntas ... Pergunta

  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  
  Pergunta.create({
    // titulo: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // descricao: {
    //   type: Sequelize.TEXT,
    //   allowNull: false
    // }
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(8080, () => { console.log("App rodando!"); })
