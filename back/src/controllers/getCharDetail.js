const axios = require("axios"); //esta forma de importar commonjs

const URL = "https://rickandmortyapi.com/api/character/";

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

// const getCharDetail = (req,res ) =>{
//     const params = req.params

//     axios.get(URL+params)
//     .then((response) => {
//         const {id, name, species, image, gender, origin} = response.data
//         const character = {
//             id: id, name: name, image:image, gender:gender, species:species, origin: origin.name,
//         }
//         if(id&&name&&image&&gender&&species){
//             res.status(200).json(character)
//         } else {
//             res.status(500).json(error.message)
//         }
//     })

// }
