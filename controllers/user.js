var mongoose = require('mongoose');
var userController = {
    read: function(req, res){
        console.log('read', req.query)
    },
    write: function(req, res){
        console.log('write', req)
    },
    authorized: function(req, res){
        console.log('authorized')
    }
};

module.exports = userController;