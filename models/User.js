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
    profileImageUrl: String
})

module.exports = User = mongoose.model('User', UserSchema);