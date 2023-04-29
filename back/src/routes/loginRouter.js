const { postUser } = require("../controllers/postUser");
const { login } = require("../controllers/login.js");
const { getUsers } = require("../controllers/getUsers.js");
const { Router } = require("express");
const loginRoutes = Router();

loginRoutes.get("/", login);
loginRoutes.get("/users", getUsers);
loginRoutes.post("/", postUser);

module.exports = loginRoutes;
