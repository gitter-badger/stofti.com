var express = require('express');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/stofti');

var indexController = require('./controllers/index.js');

//app.set('views', './views');
//app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var stormpathMiddleware = stormpath.init(app, {
    apiKeyFile: '/Users/wesleysong/IdeaProjects/stofti/.stormpath/apiKey.properties',
    application: 'https://api.stormpath.com/v1/applications/3smD8FEpyVekZTVxUoov2J',
    secretKey: 'ow9hrboijwergojrboij4nhljrfgow8jhebodinrgh3o4jtobdjrh5jyp9iuwpr3jwelgjeo59jhoehf273grihgorjthorj5hr9jrth',
    expandCustomData: true,
    enableForgotPassword: true
});

app.use(stormpathMiddleware);
app.use(express.static(__dirname + "/public"));

app.get('/', function(request, response){
    response.send("hello!");
});

app.listen(9000);