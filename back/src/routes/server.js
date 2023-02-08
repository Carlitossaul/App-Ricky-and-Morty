// const url = require('url');
// const db = require("../utils/data.js");
var http = require("http");
const characters = require("../utils/data.js")

const PORT = 3001;
// http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl);
// });
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")

    if (req.url.includes("rickandmorty/character")) {
        let id = req.url.split("/").pop() //.at(-1)

        let charactersFilter = characters.filter(per => per.id === Number(id)) //me devuelve un array con el objeto
        // let charactersFilter = characters.find(per => per.id === Number(id)) // me devulve directamente el objeto
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(charactersFilter[0]))

    }
}).listen(PORT, "localhost")

//npm init -y
//npm i axios nodemon
//packge.json - scripts - "start": "nodemon ./src/routes/server.js"