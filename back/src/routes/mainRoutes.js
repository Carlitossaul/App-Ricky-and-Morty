const express = require("express");
const mainRoutes = express.Router();
const {
  getFav,
  postFav,
  deleteFavId,
  getCharacterId,
  getDetailId,
} = require("../controllers/index");

mainRoutes.get("/rickandmorty/fav", getFav);
mainRoutes.post("/rickandmorty/fav", postFav);
mainRoutes.delete("/rickandmorty/fav/:id", deleteFavId);
mainRoutes.get("/rickandmorty/character/:id", getCharacterId);
mainRoutes.get("/rickandmorty/detail/:detailId", getDetailId);

module.exports = mainRoutes;
