const axios = require("axios"); //esta forma de importar commonjs
const { Favorite, User } = require("../DB_connection.js");

const getFavs = async (req, res) => {
  const { idUser } = req.query;
  try {
    const favs = await Favorite.findAll({
      include: [{ model: User, where: { id: idUser } }],
    });
    // console.log("favs///////////////////////////////////////", favs);
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getFavs };
