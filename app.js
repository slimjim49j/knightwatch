const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const highscores = require("./routes/api/highscores");


// const passport = require("passport");

const bodyParser = require("body-parser");

const path = require("path");

// if (process.env.NODE_ENV === "production") {
    app.use(express.static("client"));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "index.html"));
    });
// }

// passport
// app.use(passport.initialize());
// require("./config/passport")(passport);

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));




app.use("/api/highscores", highscores);






const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));