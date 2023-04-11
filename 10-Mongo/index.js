const mongoose = require("mongoose");
// const articleModel = require("./article");

// mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true});

// Configurando o mongoose de forma mais atual
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/aprendendoMongo").then(() => {
  console.log('Mongo conectado...')
}).catch((err) => {
  console.log("Houve um erro ao se conectar ao MongoDB: " + err)
});

// Passando Artigos pelas Collections de forma antiga conforme o curso

// const Article = mongoose.model("Article", articleModel);

// const artigo = new Article({ title: "Desconhecido", author: "Não consigo ler nada", body: "Uma cassetada de Thank you" });

articleModel.find({ '': '', 'body': 'React do Zero!' }).then(article => {
  console.log(article);
}).catch(err => {
  console.log(err);
});
// artigo.save();

// Model - User
const aprendendoMongoSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  }
});

// Collection feito da formaa mais atual

mongoose.model('aprendendoMongo', aprendendoMongoSchema);

const user = mongoose.model('aprendendoMongo');

new user({
  title: "Desconhecido",
  author: "Não consigo ler nada",
  body: "Uma cassetada de Thank you"
}).save().then(() => {
  console.log("Usuário cadastrado com sucesso!")
}).catch((err) => {
  console.log("Houve um erro ao registrar o usuário: " + err)
});
