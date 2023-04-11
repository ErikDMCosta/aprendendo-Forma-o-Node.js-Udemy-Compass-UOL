const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "sjfkjhsdhfksdjfhksdjfhksdjhfjhsfdghjfgsdfgjshdfsdgfjhsd";

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next) {
    const authToken = req.headers('authorization');
    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        // console.log(bearer);
        var token = bearer[1];
        jwt.verify(token, JWTSecret, (err, data) => {
            if (err) {
                res.status(401);
                res.json({ err: "Token inválido!" });
            } else {
                req.token = token;
                req.loggedUser = { id: data.id, email: data.email };
                req.empresa = "Guia do Dev";
                // console.log(data);
                next();
            }
        });
    } else {
        res.statusCode = 401;
        res.json({ err: "Token inválido!" });
    }
    // console.log(authToken);
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
        {
            id: 1,
            title: "Cyberpunk 2077",
            year: 2021,
            price: 99
        }
    ],
    users: [
        {
            id: 1,
            name: "Érik DM Costa",
            email: "erikdmcosta@email.com",
            password: "nodejs<3"
        },
        {
            id: 20,
            name: "Guilherme",
            email: "guilherme@email.com",
            password: "java123"
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json({ empresa: req.empresa, usaer: req.loggedUser, games: DB.games });
});

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        // res.send("ISSO NÃO É UM NÚMERO");
        res.sendStatus(400);
    } else {
        // res.send("ISSO É UM NÚMERO");
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if (game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }
});
var IdG = 2;
// CADASTRAR UM GAME
app.post("/game", (req, res) => {
    if (IdG == 2 || IdG == 23 || IdG == 65) {
        IdG++;
    }
    var { title, price, year } = req.body;
    DB.games.push({
        id: IdG,
        title,
        price,
        year
    });
    IdG++;
    res.sendStatus(200);
})

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        // var game = DB.games.find(g => g.id == id);
        var index = DB.games.findIndex(g => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

// Na edição de dados em API pode usar:
// PUT (recomendado), POST, PATCH 

app.put("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if (game != undefined) {

            var { title, price, year } = req.body;


            if (title != undefined) {
                game.title = title;
            }

            if (price != undefined) {
                game.price = price;
            }

            if (year != undefined) {
                game.year = year;
            }

            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }

});

app.post("/auth", (req, res) => {
    var { email, password } = req.body;
    if (email != undefined) {
        var user = DB.users.find(u => u.email == email);
        if (user != undefined) {
            if (user.password == password) {
                jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
                    if (err) {
                        req.status(400);
                        res.json({ token: "Falha Interna" });
                    } else {
                        res.status(200);
                        // res.json({ token: "TOKEN FALSO!" });
                        res.json({ token: token });
                    }
                });
            } else {
                res.status(401);
                res.json({ err: "Credencias Inválidas!" });
            }
        } else {
            res.status(404);
            res.json({ err: "O E-mail enviado não existe na base de dados!" });
        }
    } else {
        res.status(400);
        res.json({ err: "O E-mail enviado é inválido" });
    }
});

app.listen(45678, () => {
    console.log("API RODANDO!");
});