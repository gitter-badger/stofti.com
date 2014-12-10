var mongoose = require('mongoose');

var Content = mongoose.model('content', {
    shortname: String,
    title: String,
    content: String
});
module.exports = Content;