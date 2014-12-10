var mongoose = require('mongoose');

var Voting = mongoose.model('voting', {
    story_id: Number,
    contributions: [{
        author_id: Number,
        contrib_id: Number,
        votes: []
    }]
});
module.exports = Voting;