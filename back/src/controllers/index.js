const axios = require("axios"); //esta forma de importar commonjs
// const { favs } = require("../utils/favs");

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

const getCharacterId = (req, res) => {
  const { id } = req.params;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`) //llamado de un personaje en especifico
    .then(
      ({ data }) => {
        let character = {
          id: data.id,
          name: data.name,
          image: data.image,
          gender: data.gender,
          species: data.species,
        };
        res.status(200).json(character); //cuando envio la informacion la parseo
      },
      (err) => {
        res.status(500).send(err.message);
      }
    );
};

const getDetailId = (req, res) => {
  const { detailId } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${detailId}`) //llamado de un personaje en especifico
    .then((response) => response.data) //lo que me esta retornando la api
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
      };
      res.status(200).json(character);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
