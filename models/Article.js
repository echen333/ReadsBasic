const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    link: String,
    title: String,
    text: String,
    likeCount: {
        type: Number,
        default: 0
    },
    readCount: {
        type: Number,
        default: 0
    },
    parentSite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogs'
    }
})

module.exports = Article = mongoose.model('Article', ArticleSchema);