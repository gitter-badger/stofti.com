var mongoose = require('mongoose');

var Contribution = mongoose.model('contribution', {
    title: String,
    content: String
});
module.exports = Contribution;