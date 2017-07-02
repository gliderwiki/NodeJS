var url = require("url");
var parseURL = url.parse("http://www.example.com/profile?name=history");


console.log("protocol : " + parseURL.protocol);
console.log("host : " + parseURL.host);
console.log("query : " + parseURL.query);
