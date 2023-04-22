const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login.js");
const { Router } = require("express");
const loginRoutes = Router();

loginRoutes.post("/", postUser);
loginRoutes.get("/", login);

module.exports = loginRoutes;
