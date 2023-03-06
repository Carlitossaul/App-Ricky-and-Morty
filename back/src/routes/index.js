const express = require("express");
const characters = require("./characters");
const router = express.Router();

router.use("/rickandmorty", characters);
// router.use("/onsearch/:id", getCharById);

module.exports = router;
