const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    username: {
        type: String,
        reuired: true
    },
    email: {
        type: String,
        reuired: true
    },
    password: {
        type: String,
        reuired: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

const authModel = mongoose.model('users', authSchema);

module.exports = authModel;