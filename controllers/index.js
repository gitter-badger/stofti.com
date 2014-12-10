var mongoose = require('mongoose');
var Content = require("../models/content.js");
var indexController = {
    index: function(req, res) {
        console.log('index page', req)
    },
    page: function(req, res) {
        console.log('other page', req)
    }
};

module.exports = indexController;