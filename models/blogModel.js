const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    }
})

const blogModel = mongoose.model('blogs', blogSchema);

module.exports = blogModel;