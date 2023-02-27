const axios = require("axios"); //esta forma de importar commonjs

const getCharDetail = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`) //llamado de un personaje en especifico
    .then((response) => response.data) //lo que me esta retornando la api
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin?.name,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character)); //cuando envio la informacion la parseo
    })
    .catch((err) => {
      res
        .writeHead(404, { "Content-Type": "text/plain" })
        .end(`El personaje con id:  ${id} no fue encontrado`);
    });
};

module.exports = getCharDetail;
