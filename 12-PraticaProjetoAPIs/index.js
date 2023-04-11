const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "6r1and0Pr@3tic@1r1lh@73$$@$&31d@d3$";

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
                app.set('json spaces', 2);
                res.json({ err: "Token inválido!" });
            } else {
                req.token = token;
                req.loggedPerson = { id: data.id, namePerson: data.namePerson };
                req.empresa = "APIs Práticas";
                // console.log(data);
                next();
            }
        });
    } else {
        res.statusCode = 401;
        app.set('json spaces', 2);
        res.json({ err: "Token inválido!" });
    }
    // console.log(authToken);
}

var DB = {
    cityPersons: [
        {
            id: 1,
            nameCity: "Santana",
            stateCity: "AP"
        },
        {
            id: 2,
            nameCity: "Pinhais",
            stateCity: "PR"
        },
        {
            id: 4,
            nameCity: "Maceió",
            stateCity: "AL"
        },
        {
            id: 5,
            nameCity: "Cacoal",
            stateCity: "RO"
        },
        {
            id: 8,
            nameCity: "Rio Branco",
            stateCity: "AC"
        },
        {
            id: 10,
            nameCity: "Manaus",
            stateCity: "AM"
        },
        {
            id: 11,
            nameCity: "Cabo de Santo Agostinho",
            stateCity: "PE"
        },
        {
            id: 12,
            nameCity: "Cariacica",
            stateCity: "ES"
        },
        {
            id: 13,
            nameCity: "Natal",
            stateCity: "RN"
        },
        {
            id: 14,
            nameCity: "Rio Branco",
            stateCity: "AC"
        }
    ],
    clientPersons: [
        {
            id: 1,
            namePerson: "Marlene Nair Camila Dias",
            gender: "F",
            date: "13/03/1966",
            age: 57,
            city: "Santana"
        },
        {
            id: 2,
            namePerson: "Sarah Rita Nogueira",
            gender: "F",
            date: "04/04/1949",
            age: 74,
            city: "Pinhais"
        },
        {
            id: 4,
            namePerson: "Luís Leandro Cláudio Monteiro",
            gender: "M",
            date: "05/04/1998",
            age: 25,
            city: "Maceió"
        },
        {
            id: 5,
            namePerson: "Ricardo Gael Benjamin Almada",
            gender: "M",
            date: "19/02/2002",
            age: 21,
            city: "Cacoal"
        },
        {
            id: 8,
            namePerson: "Rebeca Mirella Ana Fernandes",
            gender: "F",
            date: "02/04/1963",
            age: 60,
            city: "Rio Branco"
        },
        {
            id: 10,
            namePerson: "Pietra Sophia Milena Aparício",
            gender: "F",
            date: "20/02/1945",
            age: 78,
            city: "Manaus"
        },
        {
            id: 11,
            namePerson: "Guilherme Ruan Benício Novaes",
            gender: "M",
            date: "11/02/1956",
            age: 67,
            city: "Cabo de Santo Agostinho"
        },
        {
            id: 12,
            namePerson: "Ruan Juan Fernando de Paula",
            gender: "M",
            date: "23/03/1952",
            age: 71,
            city: "Cariacica"
        },
        {
            id: 13,
            namePerson: "Iago Yuri Duarte",
            gender: "M",
            date: "06/01/1951",
            age: 72,
            city: "Natal"
        },
        {
            id: 14,
            namePerson: "Ana Francisca Baptista",
            gender: "F",
            date: "16/02/1961",
            age: 62,
            city: "Rio Branco",
            "estado": "AC"
        }
    ]
}

function callJson(req, res, staCod, resJson) {
    res.statusCode = staCod;
    app.set('json spaces', 2); // Formatando a Estrutura JSON recebida
    res.json(resJson);
}

app.get("/personscitys", (req, res) => {
    resJson = { city: DB.cityPersons, client: DB.clientPersons };
    callJson(req, res, 200, resJson);
});

app.get("/cityperson/nameCity/:nameCity", (req, res) => {
    var nameCity = req.params.nameCity;

    var person = DB.cityPersons.find(c => c.nameCity == nameCity);

    if (person != undefined) {
        callJson(req, res, 200, person);
    } else {
        res.sendStatus(404);
    }

});

app.get("/cityperson/stateCity/:stateCity", (req, res) => {
    var stateCity = req.params.stateCity;

    var city = DB.cityPersons.find(c => c.stateCity == stateCity);

    if (city != undefined) {
        callJson(req, res, 200, city);
    } else {
        res.sendStatus(404);
    }

});

// Cadastrar um Person no JSON
var IdG = 2;
app.post("/person", (req, res) => {
    if (IdG == 2 || IdG == 23 || IdG == 65) {
        IdG++;
    }
    var { nameCity, price, stateCity } = req.body;
    DB.cityPersons.push({
        id: IdG,
        nameCity,
        stateCity
    });
    IdG++;
    res.sendStatus(200);
})

// Deletar um Person no JSON
app.delete("/person/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = DB.persons.findIndex(g => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.persons.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/person/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        var id = parseInt(req.params.id);

        var person = DB.persons.find(g => g.id == id);

        if (person != undefined) {

            var { nameCity, price, stateCity } = req.body;


            if (nameCity != undefined) {
                person.nameCity = nameCity;
            }

            if (price != undefined) {
                person.price = price;
            }

            if (stateCity != undefined) {
                person.stateCity = stateCity;
            }

            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }

});

app.listen(45678, () => {
    console.log("API RODANDO!");
});