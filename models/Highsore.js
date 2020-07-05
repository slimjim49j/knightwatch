const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HighscoreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    wave: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
});

module.exports = Highscore = mongoose.model("Highscore", HighscoreSchema);