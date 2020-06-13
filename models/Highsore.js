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
    difficulty: {
        type: Number,
        required: true
    },
});

module.exports = Highscore = mongoose.model("Highscore", HighscoreSchema);