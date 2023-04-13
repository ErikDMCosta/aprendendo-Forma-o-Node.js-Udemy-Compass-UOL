# aprendendo-Formacao-Node.js-Udemy-Compass-UOL
Neste repositório deixarei minhas práticas feitas durante o curso de 'Formação Node.js 'junto a prática 'Documentação na prática' da trilha Blockchain Apprentice da Udemy pelo programa de estágio Compass UOL.

**_OBS: Abaixo próximo ao final se encontra um trecho com a documentação da API proposta no enunciado da trilha na Udemy_**.

Esta API é utilizada para TAL e TAL...
## Endpoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
### Paramêtros
Nenhum
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber a listagem de todos os games.

Exemplo de Resposta:
```
{
    "games": [
        {
            "id": 23,
            "title": "Call of duty MW",
            "year": 2019,
            "price": 60
        },
        {
            "id": 65,
            "title": "Sea of thieves",
            "year": 2018,
            "price": 40
        },
        {
            "id": 2,
            "title": "Minecraft",
            "year": 2012,
            "price": 20
        },
        {
            "id": 1,
            "title": "Cyberpunk 2077",
            "year": 2021,
            "price": 99
        }
    ]
}
```
##### Falha na Autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação de requisição. Motivos: Token inválido, Token expirado.

Exemplo de Resposta:
```
{
    "err": "Token inválido!"
}
```

### POST /auth
Esse endpoint é responsável por retornar fazer o processo de login.
#### Parametros
email: E-mail do usuário cadastrado no sistema.

password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.

Exemplo:
```
{
	"email": "erik@email.com",
	"password": "nodejs<3"
}
```
#### Respostas
##### OK! 200
Caso essa resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos na API.

Exemplo de resposta:
```
{
    "token": "eyJhbGcidsfsdfOiJIUzI1sdfsdfNiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJlcmlrZG1jb3N0YUBlbWFpbC5jb20iLCJpYXQiOjE2ODAxOTUzODIsImV4cCI6MTY4MDM2ODE4Mn0.cT48x86wFSOvTlz9h0l0vUhYEjvZDOP0uPzkEmd2QE0"
}
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.

Exemplo de resposta:
```
{err: "Credenciais inválidas!"}
```

---

# Documentação da __*PraticaProjetoAPIs*__

Elaborado a atividade seguindo o enunciado disponível na trilha de aprendizado, trata-se de API que contemplem as seguintes operações expostas como endpoints REST em JS.

## Neste será possível realizar as seguintes operações:

- Cadastros:
  - cidade
  - cliente
- Consultas:
  - cidade pelo nome
  - cidade pelo estado
  - cliente pelo nome
  - cliente pelo Id
- Remoção:
  - cliente
- Alteração:
  - nome do cliente

## Considerando que no cadastro com dados teram:

- Cidades (cityPersons):
  - id
  - nome
  - estado

- Cliente (clientPersons):
  - nome completo
  - sexo
  - data de nascimento
  - idade
  - cidade
### Atentendo aos Padrões REST nas requisições e respostas das APIs, com códigos de retorno das seguintes operações:

- "Sucess": 200
- "Created": 201
- "No content": 204
- "Bad request": 400
- "Not found": 404
- "Internal Server Error": 500

Neste sentido foi elaborado um método afim de eliminar redudâncias, este chamado callJson(req, res, staCod, resJson) no qual é passado como paramêtros:
- requisição (req)
- resposta (res)
- definação do statuscode (staCod)
- retorno do JSON (resJson)

Abaixo está um exemplo em código:
```
callJson(req, res, staCod["Sucess"], person);
```

## A seguir sobre os Endpoints da APIRest
### GET /citypersons
Esse endpoint é responsável por retornar a listagem em JSON de todos os Cidades (cityPersons) e Cliente (clientPersons) cadastrados no "banco de dados".

Caso essa resposta aconteça você vai receber a listagem como no Exemplo de Resposta:
```
{
    cityPersons: [
        {
            id: 1,
            nameCity: "Santana",
            stateCity: "AP"
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
        }
    ]
}
```
### GET /cityperson/nameCity/:nameCity"
Esse endpoint é responsável por retornar a listagem em JSON de um nome entre as Cidades (cityPersons) cadastrados no "banco de dados".

### GET /cityperson/nameCity/:nameCity"
Esse endpoint é responsável por retornar a listagem em JSON de um nome entre as Cidades (cityPersons) cadastrados no "banco de dados".

### GET /cityperson/stateCity/:stateCity
Esse endpoint é responsável por retornar a listagem em JSON de um estado entre as Cidades (cityPersons) cadastrados no "banco de dados".

### GET /cityperson/idPerson/:id"
Esse endpoint é responsável por retornar a listagem em JSON de uma pessoa passando a identificação da pessoa (id) entre os Clientes (clientPersons) cadastrados no "banco de dados".

### GET /cityperson/namePerson/:namePerson"
Esse endpoint é responsável por retornar a listagem em JSON de uma pessoa, passando como paramêtro o nome da pessoa (namePerson) entre os Clientes (clientPersons) cadastrados no "banco de dados".

### POST /city
Esse endpoint é responsável por cadastrar os dados de uma cidade em JSON e armazenar em Cidades (cityPersons) do "banco de dados" no JSON usando POSTMAN.

### POST /person
Esse endpoint é responsável por cadastrar os dados de uma pessoa em JSON e armazenar em Clientes (clientPersons) do "banco de dados" no JSON usando POSTMAN.

### DELETE /person/:id
Esse endpoint é responsável por deletar os dados de uma pessoa, passando como paramêtro a identificação da pessoa (id) entre os Clientes (clientPersons) já cadastrados no "banco de dados" usando POSTMAN.

### PUT /person/:id
Esse endpoint é responsável por atualizar os dados de uma pessoa em especial o nome, passando como paramêtro a identificação da pessoa (id) entre os Clientes (clientPersons) já cadastrados no "banco de dados" usando POSTMAN.
