const app = require("../back/src/app");
const { conn } = require("../back/src/DB_connection");
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT, () => {
  conn.sync({ force: false });
  console.log("Server raised in port " + PORT + ", and DB SYNC");
});
