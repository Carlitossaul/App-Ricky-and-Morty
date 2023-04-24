const { Router } = require("express");
const favRoutes = Router();
const { deleteFavId } = require("../controllers/deleteFavId.js");
const { getFavs } = require("../controllers/getfavs.js");
const { postFavs } = require("../controllers/postFavs.js");
favRoutes.get("/", getFavs);
favRoutes.post("/", postFavs);
favRoutes.delete("/:id", deleteFavId);

module.exports = favRoutes;
