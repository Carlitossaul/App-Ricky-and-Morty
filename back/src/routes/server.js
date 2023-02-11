
var http = require("http");
const getCharById = require("../controllers/getCharById")
const getCharDetail2 = require("../controllers/getCharDetail2")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*") //esta linea permitira conectar tu front con el servidor sin que haya probemas de cors

    let id = req.url.split("/").at(-1) //.pop()

    if (req.url.includes("onsearch")) {
        getCharById(res, id)
    }
    if (req.url.includes("detail")) {
        getCharDetail2(res, id)
    }
}).listen(3001, "localhost")

//npm init -y
//npm i axios nodemon
//packge.json - scripts - "start": "nodemon ./src/routes/server.js"


// let charactersFilter = characters.filter(per => per.id === Number(id)) //me devuelve un array con el objeto
// // let charactersFilter = characters.find(per => per.id === Number(id)) // me devulve directamente el objeto
// res.writeHead(200, { 'Content-Type': 'application/json' })
// res.end(JSON.stringify(charactersFilter[0]))