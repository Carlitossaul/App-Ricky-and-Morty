const { Router } = require("express");
const charRoutes = Router();

const { getCharacterId, getDetailId } = require("../controllers/index");

charRoutes.get("/character/:id", getCharacterId);
charRoutes.get("/detail/:detailId", getDetailId);

module.exports = charRoutes;
