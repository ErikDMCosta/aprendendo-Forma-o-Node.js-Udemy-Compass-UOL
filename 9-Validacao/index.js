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

  var emailError = req.flash("emailError");
  var pontosError = req.flash("pontosError");
  var nomeError = req.flash("nomeError");
  var email = req.flash("email");

  // if (emailError != undefined) {
  //   if (emailError.length == 0) {
  //     emailError = undefined;
  //   } else { }
  // } 

  emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
  email = (email == undefined || email.length == 0) ? "" : email;

  res.render("index", { emailError, pontosError, nomeError, email: email });
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
    req.flash("emailError", emailError);
    req.flash("pontosError", pontosError);
    req.flash("nomeError", nomeError);

    req.flash("email", email);

    res.redirect("/");
  } else {
    res.send("SHOW DE BOLA ESSE FORM!");
  }
  // res.send(email);
});

app.listen(5678, (res, req) => {
  console.log("Servidor Rodando!");
});