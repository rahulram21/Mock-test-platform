const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test', testSchema);
module.exports = Test;