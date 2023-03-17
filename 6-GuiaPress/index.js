const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./users/UsersController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!")
  })
  .catch((error) => {
    console.log(error);
  })


app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site!");
});

app.listen(8080, () => {
  console.log("O servidor está rodando!");
});
