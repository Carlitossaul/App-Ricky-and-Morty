const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const charRoutes = require("./routes/charRouter");
const favRoutes = require("./routes/favRouter");
const loginRoutes = require("./routes/loginRouter");

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://rym-multiverse.vercel.app"
  ); // http://localhost:3000
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(express.json());
app.use("/rickandmorty", charRoutes);
app.use("/rickandmorty/fav", favRoutes);
app.use("/rickandmorty/login", loginRoutes);

module.exports = app;
