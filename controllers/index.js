var mongoose = require('mongoose');
var Content = require("../models/content.js");
var Contribution = require("../models/contribution.js");
var Story = require("../models/story.js");
var Voting = require("../models/voting.js");
var indexController = {
    read: function(req, res){
        console.log('read', req)
    },
    write: function(req, res){
        console.log('write', req)
    },
    vote: function(req, res){
        console.log('vote', req)
    },
    writenew: function(req, res){
        console.log('writenew', req)
    },
    newvote: function(req, res){
        console.log('newvote', req)
    },
    writeedit: function(req, res){
        console.log('writeedit', req)
    }
};

module.exports = indexController;