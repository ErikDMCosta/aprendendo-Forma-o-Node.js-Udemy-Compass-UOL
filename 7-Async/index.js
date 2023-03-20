// setTimeout(() => {
//   console.log("Meu nome é Érik");
// }, 5000); // Tempo em Milisegundos

function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
    Para: ${para}
    ----------------------------------
    ${corpo}
    ----------------------------------
    `)
  }, 8000);
}

console.log("Inicio do envio de e-mail!")
enviarEmail("Oi, seja bem vindo ao Guia", "erik@udemy.com")
console.log("Seu e-mail foi enviado, deve chegar em minutos")
console.log("TUDO OK!")
