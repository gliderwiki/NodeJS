var express = require('express');
var http = require('http');
var path = require("path");
var logger = require('morgan'); // loggin 미들 웨어
var bodyParser = require('body-parser');

var app = express();    // express 생성
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entries = [];
app.locals.entries = entries;


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', express.static('public')); // root 하위 static 경로를 포함한다. url 로 접근 가능

app.get("/", function (request, response) {
    response.render("index", {
        message: "Node.JS!!",
        title: "Hi!!"
    });
});

app.get("/new-entry", function (request, response) {
    response.render("new-entry");
});

app.post("/new-entry", function(request, response) {
    if (!request.body.title || !request.body.body) {
        response.status(400).send("Entries must have a title and a body");
        return;
    }

    entries.push({
        title : request.body.title,
        content : request.body.body,
        published: new Date()
    });

    response.redirect("/");
})

app.get("/test", function (request, response) {
    console.log("test url " + request.url);
    response.end("test");
});

app.use(function(request, response) {
    console.log("error page!!");
    response.status(404).render("404");
});



http.createServer(app).listen(3000);