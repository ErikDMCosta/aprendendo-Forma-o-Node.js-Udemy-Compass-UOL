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
  res.send("Bem Vindo ao Guia do Programador!");
});

app.get("/blog", function(req, res) {
  res.send("Bem vindo ao meu blog!");
})

app.get("/canal/youtube", function(req, res){
  res.send("<h1>Bem vindo ao meu canal!</h1>");
})

app.listen(4000, function(erro){
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
})
