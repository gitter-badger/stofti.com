var mongoose = require('mongoose');
var Content = require("../models/content.js");
var indexController = {
    index: function(req, res) {
        Content.find({shortname: "home"}, function(err, page) {
            if (err)
                res.send(err);
            else
                res.json(page[0])
        })
    },
    page: function(req, res) {
        var pageName = req.params.shortname;
        Content.find({shortname: pageName}, function(err, page) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err);
            else
                res.json(page[0]); // return home in JSON format
        });
    }
};

module.exports = indexController;