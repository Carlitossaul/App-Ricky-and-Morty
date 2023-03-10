const axios = require("axios"); //esta forma de importar commonjs
var favs = require("../utils/favs");

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
  if (detailId) {
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
  } else {
    res.status(500).send("deves proveer un id por parametro");
  }
}

module.exports = {
  getCharacterId,
  getDetailId,
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
