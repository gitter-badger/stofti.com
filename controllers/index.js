var mongoose = require('mongoose');
var Content = require("../models/content.js");
var Contribution = require("../models/contribution.js");
var Story = require("../models/story.js");
var Voting = require("../models/voting.js");
var indexController = {
    read: function(req, res){
        console.log('read')
    },
    write: function(req, res){
        console.log('write')
    },
    vote: function(req, res){
        console.log('vote')
    }
};

module.exports = indexController;