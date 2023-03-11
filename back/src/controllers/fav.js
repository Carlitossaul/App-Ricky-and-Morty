const axios = require("axios"); //esta forma de importar commonjs
var favs = require("../utils/favs");

const getFav = (req, res) => {
  return res.status(200).json(favs);
};

const postFav = (req, res) => {
  favs.push({ ...req.body });

  res.status(200).json(favs);
};

const deleteFavId = (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id !== Number(id));
  return res.status(200).json(favs);
};

module.exports = {
  getFav,
  postFav,
  deleteFavId,
};
