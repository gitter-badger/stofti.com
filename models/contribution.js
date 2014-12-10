var mongoose = require('mongoose');

var Contribution = mongoose.model('contribution', {
    contrib_id: Number,
    author_id: Number,
    content: String
});
module.exports = Contribution;