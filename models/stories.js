const mongoose = require('mongoose');
const storiesSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    story_description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});
const Stories = mongoose.model('Stories', storiesSchema);
module.exports = Stories;