const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleID: String,
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    articlesRead: {
        type: [String]
    },
    profileImageUrl: String,
    liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
    read: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
})

module.exports = User = mongoose.model('User', UserSchema);