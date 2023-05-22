const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login.js");
const { Router } = require("express");
const loginRoutes = Router();

loginRoutes.get("/", login);
loginRoutes.post("/", postUser);

module.exports = loginRoutes;
