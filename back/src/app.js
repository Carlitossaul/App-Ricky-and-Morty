const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const charRoutes = require("./routes/charRouter");
const favRoutes = require("./routes/favRouter");
const loginRoutes = require("./routes/loginRouter");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// Configuración con problema de CORS
const corsOptions = {
  origin: "https://multiverse-rym.vercel.app",
  // origin: "*",
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json()); //para que funcione mi servidor con formato json
app.use("/rickandmorty", charRoutes);
app.use("/rickandmorty/fav", favRoutes);
app.use("/rickandmorty/login", loginRoutes);

module.exports = app;
