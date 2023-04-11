let app = require("../src/app");
let supertest = require("supertest");

//let request = supertest("www.google.com"); // Passando URL dentro para Requisição

// let request = supertest("http://localhost:3131"); 
let request = supertest(app);

// test("A aplicação deve responder na porta 31311", () => {
test("A aplicação deve responder na porta 3131", async () => {
  // Supertest ...
  // request.get("/").then(res => expect(res.statusCode).toEqual(200)); // Retorno statusCode de 200 com sucesso!

  // request.get("/").then(res => expect(res.statusCode).toEqual(404)); // Teste passa mas se Queixa do que Esperava pelo Jest em Poomisse

  //SEMPRE COLOQUE RETURN ao trabalhar com Promise em Jest
  //return request.get("/").then(res => expect(res.statusCode).toEqual(404)); // Agora terá de falhar!

  // return request.get("/").then(res => expect(res.statusCode).toEqual(200));

  // Outra Alternativa ao Promise é o uso de Await
  // let res = await request.get("/");
  // expect(res.statusCode).toEqual(404);
  // expect(res.statusCode).toEqual(200);

  // Com Await deve fazer uso de Try-Catch
  // try {
  //   let res = await request.get("/");
  //   expect(res.statusCode).toEqual(200);
  // } catch (error) {

  // }

  return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});

test("Deve retornar uma cacetada de Thank you", () => {
  return request.get("/cacetada/thankyou").then(res => {
    expect(res.statusCode).toEqual(200)
    expect(res.body.cacetada).toEqual("thankyou");
  })
})
