const axios = require("axios");

function getCharacterId(req, res) {
  const { id } = req.params;

  axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
    ({ data }) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
      };
      res.status(200).json(character);
    },
    (err) => {
      res.status(500).send(err.message);
    }
  );
}

async function getDetailId(req, res) {
  const { detailId } = req.params;
  axios
    .get(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then(({ data }) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin.name,
        location: data.location.name,
      };
      return res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
}

module.exports = {
  getCharacterId,
  getDetailId,
};
