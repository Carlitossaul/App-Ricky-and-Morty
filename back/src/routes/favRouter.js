const { Router } = require("express");
const favRoutes = Router();
const { getFav, postFav, deleteFavId } = require("../controllers/fav.js");

favRoutes.get("/", getFav);
favRoutes.post("/", postFav);
favRoutes.delete("/:id", deleteFavId);

module.exports = favRoutes;
