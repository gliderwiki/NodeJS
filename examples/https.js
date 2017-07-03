var express = require('express');
var https = require('https');
// http도 동시에 사용할 경우
var http = require('http');
var fs = require("fs");

var app = express();

// 개인키와 인증서를 포함하는 개체를 정의한다
var httpsOptions = {
    key : fs.readFileSync("path/to/private/key.pem"),
    cert : fs.readFileSync("path/to/certificate.pem")
};

// http도 동시에 사용할 경우
http.createServer(app).listen(80);

// 개체를 https.createServer로 전달한다.
https.createServer(httpsOptions, app).listen(443);