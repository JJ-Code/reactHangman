const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WordSchema = new Schema({
    word_selected: {
        type: String,
        required: false
    },
    clue: {
        type: String,
        required: false
    },
    wordCreated: {
        type: Date,
        default: Date.now
    }
});

const Word = mongoose.model('Word', WordSchema);
module.exports = Word;