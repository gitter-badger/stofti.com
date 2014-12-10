var mongoose = require('mongoose');

var Voting = mongoose.model('voting', {
    shortname: String,
    title: String,
    content: String
});
module.exports = Voting;