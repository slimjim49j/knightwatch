import axios from 'axios';

class Leaderboard {
    constructor() {
        this.highscores =  [];
        this.leaderboardLength = 10;
    }

    isHighscore(score) {
        return this.highscores.length < this.leaderboardLength || score > this.highscores[this.highscores.length-1].score;
    }

    getScores() {
        return axios.get("/api/highscores")
            .then(scores => this.highscores = scores.data);
    }

    postScore(userScore) {
        return axios.post("/api/highscores", userScore)
            .then(res => {
                let newScore = res.data;
                let newHighscores = [];
                let newScoreAdded = false;
                this.highscores.forEach(score => {
                    if (score.score < newScore.score && !newScoreAdded) {
                        newHighscores.push(newScore);
                        newScoreAdded = true;
                    }
                    newHighscores.push(score);
                });
                if (!newScoreAdded) newHighscores.push(newScore);
                if (newHighscores.length > this.leaderboardLength) newHighscores.pop();
                this.highscores = newHighscores;
            });
    }
}

export default Leaderboard;