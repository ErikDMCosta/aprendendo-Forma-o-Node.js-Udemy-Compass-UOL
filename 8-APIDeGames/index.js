const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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

app.post("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
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
                res.status(200);
                res.json({ token: "TOKEN FALSO!" });
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