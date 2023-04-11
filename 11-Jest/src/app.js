const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.statusCode(200);
  res.json({ success: true });
})

// app.listen(3131, (res, req) => {
//   console.log("Servidor Rodando!");
// });

app.get("/cacetada/:yesBaby", (req, res) => {
  // res.json({"thankyou": "Thankyou"})
  let yesBaby = req.params.yesBaby;
  if (yesBaby == "thankyou") {
    res.json({ cacetada: "thankyou" })
  }
})

module.exports = app;