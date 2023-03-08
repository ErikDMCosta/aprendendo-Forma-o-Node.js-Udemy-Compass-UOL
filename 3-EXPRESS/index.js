const express = require("express"); // Importante o express
const app = express(); // Iniciando o express

// FOrmas de Criar ROtas - Aprender Módulo Criar APIs
// app.get();
// app.post();
// app.delete();
// app.option();
// app.patch();

// Dentro fica o Nome da Rota
// app.get("/perfil");
// app.get("/blog");

// (requisição, resposta)
app.get("/", function(req, res){
});

// app.get("/blog", function(req, res) {
  app.get("/blog/:artigo?", function(req, res) {
    var artigo = req.params.artigo;
    if (artigo) {
      res.send("<h2>Artigo " + artigo + "</h2>");
    } else {
      res.send("<h3>Bem vindo ao meu blog!</h3>");
    }
  res.send("<h3>Bem vindo ao meu blog!</h3>");
})

app.get("/canal/youtube", function(req, res){
  var canal = req.query["canal"];
  // res.send("<h1>Bem vindo ao meu canal!</h1>");
  if (canal) {
  res.send(canal);
} else {
    res.send("Nenhum canal forncedio!");
  }
})

// Criando parâmetros na Rota
// Apenas acessível se passar um parâmetro
// app.get("/ola/:nome", function(req, res) {
app.get("/ola/:nome/:empresa", function(req, res) {
  // REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
  // res.send("<h1>Oi!</h1>");
  // res.send(req.params.nome);
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send("<h1>Oi " + nome + " do " + empresa + "</h1>")
});

app.listen(4000, function(erro){
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})
