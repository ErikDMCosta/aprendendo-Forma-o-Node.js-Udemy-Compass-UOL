const express = require("express");
const app = express();

// View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site!");
});

app.listen(8080, () => {
  console.log("O servidor está rodando!");
});
