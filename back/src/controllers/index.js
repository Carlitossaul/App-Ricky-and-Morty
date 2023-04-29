const axios = require("axios"); //esta forma de importar commonjs

function getCharacterId(req, res) {
  const { id } = req.params;
  // console.log(id);
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
      console.log(error.message);
    });
}

module.exports = {
  getCharacterId,
  getDetailId,
};

// const response = await axios.get(
//   `https://rickandmortyapi.com/api/character/${id}`
// );

// try {
//   let character = {
//     id: response.data.id,
//     name: response.data.name,
//     image: response.data.image,
//     gender: response.data.gender,
//     species: response.data.species,
//   };
//   res.status(200).json(character);
// } catch (error) {
//   res.status(500).send(error.message);
//   console.log(error.message);
// }
