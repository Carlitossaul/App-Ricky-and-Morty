const axios = require("axios"); //esta forma de importar commonjs

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`) //llamado de un personaje en especifico
    .then(({ data }) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character)); //cuando envio la informacion la parseo
    })
    .catch((err) => {
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(`El personaje con id:  ${id} no fue encontrado`);
    });
};
module.exports = getCharById;

//export delante de la variable es sin s

// const URL = 'https://rickandmortyapi.com/api/character/'

// const getCharById = (req,res ) =>{
//     const params = req.params

//     axios.get(URL+params)
//     .then((response) => {
//         const {id, name, species, image, gender} = response.data
//         const character = {
//             id: id, name: name, image:image, gender:gender, species:species
//         }
//         if(id&&name&&image&&gender&&species){
//             res.status(200).json(character)
//         } else {
//             res.status(500).json(error.message)
//         }
//     })

// }
