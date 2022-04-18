const route1 = require("express").Router();

const path = require("path");

route1.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

route1.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

route1.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = route1;
