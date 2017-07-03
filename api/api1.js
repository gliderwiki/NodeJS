var express = require('express');
var api = express.Router();

api.get("/timezone", function(req, res) {
    res.send("v1 timezone");
})

api.get("/all_timezone", function (req, res) {
    res.send("v1 all_timezone");
});

module.exports = api;