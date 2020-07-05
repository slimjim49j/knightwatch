import axios from 'axios';

class Leaderboard {
    constructor() {
        this.highscores =  {};
        this.leaderboardLength = 10;
    }

    isHighscore(difficulty, score) {
        const scores = this.highscores[difficulty]
        let lowestScore = scores[scores.length - 1];
        // handle when no scores present
        lowestScore = lowestScore === undefined ? { score: -1 } : lowestScore;
        const currentLength = scores.length;
        return currentLength < this.leaderboardLength || score > lowestScore.score;
    }

    getScores() {
        return axios.get("/api/highscores")
            .then(scores => this.highscores = scores.data[0]);
    }

    postScore(userScore) {
        return axios.post("/api/highscores", userScore)
            .then(res => {
                let newScore = res.data;
                let newHighscores = [];
                let newScoreAdded = false;
                this.highscores[userScore.difficulty].forEach(score => {
                    if (score.score < newScore.score && !newScoreAdded) {
                        newHighscores.push(newScore);
                        newScoreAdded = true;
                    }
                    newHighscores.push(score);
                });
                if (!newScoreAdded) newHighscores.push(newScore);
                if (newHighscores.length > this.leaderboardLength) newHighscores.pop();
                this.highscores[userScore.difficulty] = newHighscores;
            });
    }
}

export default Leaderboard;