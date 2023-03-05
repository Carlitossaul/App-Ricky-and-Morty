const express = require("express");
const router = require("./index");
const bodyParser = require("body-parser");

const server = express();
// res.setHeader("Access-Control-Allow-Origin", "*"); //esta linea permitira conectar tu front con el servidor sin que haya probemas de cors. con esto restringimos el acceso. y cin el asterisco decimos que es universal.

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use("/", router);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

module.exports = {
  server,
};

// http
//   .createServer((req, res) => {
// res.setHeader("Access-Control-Allow-Origin", "*"); //esta linea permitira conectar tu front con el servidor sin que haya probemas de cors. con esto restringimos el acceso. y cin el asterisco decimos que es universal.

//     let id = req.url.split("/").at(-1); //.at(-1)
//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//       getCharDetail(res, id);
//     }
//   })
//   .listen(3001, "localhost");

//npm init -y
//npm i axios nodemon
//packge.json - scripts - "start": "nodemon ./src/routes/server.js"

// let charactersFilter = characters.filter(per => per.id === Number(id)) //me devuelve un array con el objeto
// // let charactersFilter = characters.find(per => per.id === Number(id)) // me devulve directamente el objeto
// res.writeHead(200, { 'Content-Type': 'application/json' })
// res.end(JSON.stringify(charactersFilter[0]))

// npm i body-parser
//  esta librería es necesaria para que puedas recibir la información por body.
// Una vez la tengas instalada copia y pega este snippet de código dentro del archivo app.js:
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(bodyParser.json({ limit: "50mb" }));
