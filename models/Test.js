const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    buttonValue: Number 
})

module.exports = Test = mongoose.model('Test', TestSchema);