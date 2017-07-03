var express = require("express");

var api = express.Router();

api.get("/timezone", function (req, res) {
    res.send("Api 2 timezone");
});

module.exports = api;