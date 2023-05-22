const axios = require("axios"); //esta forma de importar commonjs
const { Favorite, User } = require("../DB_connection.js");

const postFavs = async (req, res) => {
  const { idUser } = req.query;

  const { id, name, species, gender, image } = req.body;

  try {
    if (!id || !name || !species || !gender || !image)
      res.status(401).json({ message: "ERROR: Faltan datos." });
    const [fav, created] = await Favorite.findOrCreate({
      where: {
        id,
        name,
        species,
        gender,
        image,
      },
    });
    fav.addUser(idUser);

    const favs = await Favorite.findAll({
      include: [{ model: User, where: { id: idUser } }],
    });

    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postFavs };
