var mongoose = require('mongoose');

var Story = mongoose.model('story', {
    story_id: Number
    title: String,
    edit_end: Date,
    vote_end: Date,
    contributions: [{
        author_id: Number,
        contrib_id: Number,
        content: String,
        votes: Number
    }]
});
module.exports = Story;