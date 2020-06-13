const express = require("express");
const router = express.Router();
const Highscore = require("../../models/Highsore");

router.get("/", (req, res) => {
    Highscore.find({})
        .sort({"score": -1})
        .limit(10)
        .then(scores => {
            res.json(scores);
        });
});

router.post("/", (req, res) => {
    const newScore = new Highscore({
        name: req.body.name,
        score: req.body.score,
        difficulty: req.body.difficulty,
    });
    newScore.save()
        .then(score => res.json(score))
        .catch(err => console.log(err));
});

module.exports = router;