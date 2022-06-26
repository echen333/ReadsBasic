const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    link: String,
    title: String,
    text: String
})

module.exports = Article = mongoose.model('Article', ArticleSchema);