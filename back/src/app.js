const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const charRoutes = require("./routes/charRouter");
const favRoutes = require("./routes/favRouter");
const loginRoutes = require("./routes/loginRouter");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

//Seteamos headers para la respuesta que le enviamos al cliente
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});
app.use(express.json()); //para que funcione mi servidor con formato json
app.use("/rickandmorty", charRoutes);
app.use("/rickandmorty/fav", favRoutes);
app.use("/rickandmorty/login", loginRoutes);

module.exports = app;
