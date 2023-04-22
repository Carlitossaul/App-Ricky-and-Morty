const axios = require("axios"); //esta forma de importar commonjs
const { Favorite } = require("../DB_connection.js");

const getFav = async (req, res) => {
  const favorites = await Favorite.findAll();
  return res.status(200).json(favorites);
};

const postFav = async (req, res) => {
  const { name, image, status, species, gender, origin } = req.body;

  if (!name || !image || !status || !species || !gender || !origin)
    return res.status(401).json({ msg: "Faltan datos" });

  const [newFav, created] = await Favorite.findOrCreate({
    name,
    image,
    status,
    species,
    gender,
    origin,
  });

  const favs = await Favorite.findAll();

  res.status(200).json(favs);
};

const deleteFavId = async (req, res) => {
  const { id } = req.params;

  try {
    const fav = await Favorite.findByPk(id);
    fav.destroy();
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
};

module.exports = {
  getFav,
  postFav,
  deleteFavId,
};
