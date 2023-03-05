const { server } = require("../routes/server.js");

const favs = [];

server.post("/rickandmorty/fav", (req, res) => {
  const { character } = req.body;

  if (character) {
    favs.push(character);
  }
});

server.get("/rickandmorty/fav", (req, res) => {
  res.json(favs);
});

server.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;

  const filtered = favs.filter((char) => char.id !== id);

  res.status(200).json(filtered);
});

module.exports = favs;
