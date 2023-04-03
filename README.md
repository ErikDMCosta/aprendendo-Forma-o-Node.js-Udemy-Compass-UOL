# aprendendo-Formacao-Node.js-Udemy-Compass-UOL
Neste repositório deixarei minhas práticas feitas durante o curso de 'Formação Node.js 'junto a prática 'Documentação na prática' da trilha Blockchain Apprentice da Udemy pelo programa de estágio Compass UOL.

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