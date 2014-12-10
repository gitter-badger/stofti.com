var express = require('express');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/stofti');

var indexController = require('./controllers/index.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(stormpath.init(app, {
    application: 'https://api.stormpath.com/v1/applications/3smD8FEpyVekZTVxUoov2J',
    secretKey: '9p8helgibndbdlsirnfw84ehfeilurbn3l4gi8h3ir2hiweufhw789ehg98ehjrb3elhgk',
}));

app.use(express.static(__dirname + "/public"));

app.get('/');

app.listen(9000);
console.log('Listening on port 9000');