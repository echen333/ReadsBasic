const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    link: String,
    title: String,
    author: String,
    totLikeCount: Number,
    totReadCount: Number,
    childrenArticles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
})

module.exports = Blog = mongoose.model('Blog', BlogSchema);