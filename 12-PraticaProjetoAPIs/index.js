const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Registro de cityPersons e clientPersons em "BD Fictício"
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
            nameCity: "Cruzeiro do Sul",
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
            namePerson: "Marlene",
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
            city: "Cruzeiro do Sul"
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

// Método criado para evitar redundancia de chamada JSON
function callJson(req, res, staCod, resJson) {
        res.statusCode = staCod;
        app.set('json spaces', 2); // Formatando a Estrutura JSON recebida
        res.json(resJson);
}

// Listando em JSON todos os Registros de cityPersons e clientPersons
app.get("/citypersons", (req, res) => {
    resJson = { city: DB.cityPersons, client: DB.clientPersons };
    callJson(req, res, 200, resJson);
});

// Listando em JSON um Cidade cadastrada
app.get("/cityperson/nameCity/:nameCity", (req, res) => {
    var nameCity = req.params.nameCity;
    var person = DB.cityPersons.find(c => c.nameCity == nameCity);
    if (person != undefined) {
        callJson(req, res, 200, person);
    } else {
        res.sendStatus(404);
    }
});

// Listando em JSON um Estado cadastrado
app.get("/cityperson/stateCity/:stateCity", (req, res) => {
    var stateCity = req.params.stateCity;
    var city = DB.cityPersons.filter(c => c.stateCity == stateCity);
    if (city != undefined) {
        callJson(req, res, 200, city);
    } else {
        res.sendStatus(404);
    }
});

// Listando em JSON um ID do Cliente cadastrado
app.get("/cityperson/idPerson/:id", (req, res) => {
    // throw("msg qualquer"); // Teste de statuscode 500 Internal Server Error
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var person = DB.clientPersons.find(p => p.id == id);
        if (person != undefined) {
            callJson(req, res, 200, person);
        } else {
            res.sendStatus(404);
        }
    }
});

// Listando em JSON um Nome do Cliente cadastrado
app.get("/cityperson/namePerson/:namePerson", (req, res) => {
    var namePerson = req.params.namePerson;
    var person = DB.clientPersons.filter(c => c.namePerson == namePerson);
    if (person != undefined) {
        callJson(req, res, 200, person);
    } else {
        res.sendStatus(404);
    }
});

// Cadastrar um City no JSON usando POSTMAN
var IdG = 2;
app.post("/city", (req, res) => {
    if (IdG == 2 || IdG == 4 || IdG == 5 || IdG == 6 || IdG == 8) {
        IdG++;
    }
    var { nameCity, stateCity } = req.body;
    DB.cityPersons.push({
        id: IdG,
        nameCity,
        stateCity
    });
    IdG++;
    res.sendStatus(200);
})

// Cadastrar um Person no JSON usando POSTMAN
var IdG = 2;
app.post("/person", (req, res) => {
    if (IdG == 2 || IdG == 5 || IdG == 6 || IdG == 8) {
        IdG++;
    }
    var { namePerson, gender, date, age, city } = req.body;
    DB.clientPersons.push({
        id: IdG,
        namePerson,
        gender,
        date,
        age,
        city
    });
    IdG++;
    res.sendStatus(201);
})

// Deletar um Person no JSON usando POSTMAN
app.delete("/person/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = DB.clientPersons.findIndex(c => c.id == id);
        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.clientPersons.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

// Atualizar o nome de Person no JSON usando POSTMAN
app.put("/person/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var person = DB.clientPersons.find(p => p.id == id);
        if (person != undefined) {
            var { namePerson, gender, date, age, city } = req.body;
            if (namePerson != undefined) {
                person.namePerson = namePerson;
            }
            if (gender != undefined) {
                person.gender = gender;
            }
            if (date != undefined) {
                person.date = date;
            }
            if (age != undefined) {
                person.age = age;
            }
            if (city != undefined) {
                person.city = city;
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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Erro Inesperado!");
});
