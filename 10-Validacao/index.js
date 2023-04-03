const express = require("express");
const app = express();
var session = require('express-session')
var flash = require('express-flash')
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("qualqcoisa"));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
  cookie: { maxAge: 60000 } // Equivalente 1H
}))

app.use(flash());

app.get("/", (req, res) => {
  // console.log("Está Rodando...");
  // res.send("Rodando...");
  res.render("index");
});

app.post("/form", (req, res) => {
  var { email, nome, pontos } = req.body;

  var emailError;
  var pontosError;
  var nomeError;

  if (email == undefined || email == "") {
    // err
    emailError = "O e-mail não pode ser vazio";
  }

  if (pontos == undefined || pontos < 20) {
    // err
    pontosError = "Você não pode ter menos de 20 ponto";
  }

  if (nome == undefined || "") {
    // err
    nomeError = "O nome não pode ser vazio";
  }
  
  if (nome.length < 4) {
    nomeError = "O nome é muito pequeno";
  }

  if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
    // res.send("ESSE FORM É MUITO FEIO!");
    res.redirect("/");
  } else {
    res.send("SHOW DE BOLA ESSE FORM!");
  }
  // res.send(email);
});

app.listen(5678, (res, req) => {
  console.log("Servidor Rodando!");
});