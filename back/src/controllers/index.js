const axios = require("axios"); //esta forma de importar commonjs
// const favs = require("../utils/favs");
// import favs from "../utils/favs";
let favs = [];

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

async function getCharacterId(req, res) {
  const { id } = req.params;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  try {
    let character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
}

async function getDetailId(req, res) {
  const { detailId } = req.params;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${detailId}`
  );
  try {
    let character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
      status: response.data.status,
      origin: response.data.origin.name,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
}

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};

// axios
//   .get(`https://rickandmortyapi.com/api/character/${id}`) //llamado de un personaje en especifico
//   .then(
//     ({ data }) => {
//       let character = {
//         id: data.id,
//         name: data.name,
//         image: data.image,
//         gender: data.gender,
//         species: data.species,
//       };
//       res.status(200).json(character); //cuando envio la informacion la parseo
//     },
//     (err) => {
//       res.status(500).send(err.message);
//     }
//   );
