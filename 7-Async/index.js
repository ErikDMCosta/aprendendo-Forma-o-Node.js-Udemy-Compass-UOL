// setTimeout(() => {
//   console.log("Meu nome é Érik");
// }, 5000); // Tempo em Milisegundos

function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    // console.log(`
    // Para: ${para}
    // ----------------------------------
    // ${corpo}
    // ----------------------------------
    // De: Érik
    // `)

    // -------- Lógica

    // var deuErro = false;
    var deuErro = true;
    if (deuErro) {
      callback(12,"O Envio do e-mail falhou!");
    } else {
      // callback("OK",5,"8s","Érik"); // Possível ignorar paramêtros
      callback(12);
    }
  }, 8000);
}

console.log("Inicio do envio de e-mail!");
// enviarEmail("Oi, seja bem vindo ao Guia", "erik@udemy.com", (status,amount,time, name) => { // Não ignorando o paramêtro agora

enviarEmail("Oi, seja bem vindo ao Guia", "erik@udemy.com", (time,erro) => {

  if (erro == undefined) { // OK
    console.log("TUDO OK!");
  } else { // Opa, deu um erro!
    console.log("Ocorreu um erro: " + erro);
  }

  //  console.log("OLÁ ISSO É UM CALLBACK!");
  //  console.log("Ele acaba de ser executado!");
  // console.log("Seu e-mail foi enviado, deve chegar em minutos");
  // console.log(`
  // De: ${name}
  // Status: ${status}
  // ------------------
  // Contatos: ${amount}
  // ------------------
  // Tempo de Envio: ${time}
  // `);
  // console.log("TUDO OK!");
});

// console.log("Seu e-mail foi enviado, deve chegar em minutos");
// console.log("TUDO OK!");

// app.get("/usuario", (req, res) => {

// });
