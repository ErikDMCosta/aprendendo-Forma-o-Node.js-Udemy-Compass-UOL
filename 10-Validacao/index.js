const express = require("express");
const app = express();
var session = require('express-session')
var flash = require('express-flash')
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(flash());

app.get("/",(req,res) => {
  console.log("Está Rodando...");
  res.send("Rodando...");
});

app.listen(5678, (res, req) => {
  console.log("Servidor Rodando!");
});