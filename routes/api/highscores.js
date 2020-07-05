const express = require("express");
const router = express.Router();
const Highscore = require("../../models/Highsore");

router.get("/", (req, res) => {
    // Highscore.find({})
    //     .sort({"score": -1})
    //     .limit(10)
    //     .then(scores => {
    //         res.json(scores);
    //     });

    Highscore.aggregate([
        {
            '$facet': {
                'easy': [
                    {
                        '$match': {
                            'difficulty': 'easy'
                        }
                    }, {
                        '$sort': {
                            'score': -1
                        }
                    }, {
                        '$limit': 10
                    }
                ],
                'medium': [
                    {
                        '$match': {
                            'difficulty': 'medium'
                        }
                    }, {
                        '$sort': {
                            'score': -1
                        }
                    }, {
                        '$limit': 10
                    }
                ],
                'hard': [
                    {
                        '$match': {
                            'difficulty': 'hard'
                        }
                    }, {
                        '$sort': {
                            'score': -1
                        }
                    }, {
                        '$limit': 10
                    }
                ]
            }
        }
    ],
    function (err, data) {
        if (err) throw err;
        else return res.json(data);
    })
});

router.post("/", (req, res) => {
    const newScore = new Highscore({
        name: req.body.name,
        score: req.body.score,
        wave: req.body.wave,
        difficulty: req.body.difficulty,
    });
    newScore.save()
        .then(score => res.json(score))
        .catch(err => console.log(err));
});

module.exports = router;