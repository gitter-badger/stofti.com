var mongoose = require('mongoose');

var Story = mongoose.model('story', {
    shortname: String,
    title: String,
    content: String
});
module.exports = Story;