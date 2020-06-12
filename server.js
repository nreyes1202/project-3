const express = require("express");
const PORT = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');

const Habit = require('./models/Habit');


// not sure what this does?
mongoose.Promise = global.Promise;

// MONGO setup ===
// =============================================================
// IF NODE_ENV exists then setup for Heroku, if not just use local
let MONGODB_URI = process.env.NODE_ENV
    ? process.env.MONGODB_URI
    : "mongodb://heroku_bwqsgrdb:rAtYGyjekK3fa@ds141490.mlab.com:41490/heroku_bwqsgrdb";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// =============================================================


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// // Express Session
// app.use(
//     session({
//         secret: "Secret password!",
//         resave: false,
//         saveUninitialized: true,
//         store: new MongoStore({ mongooseConnection: mongoose.connection })
//     })
// );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/api/auth", auth);
// app.get("/", (req, res) => res.send("Hello!"));


app.delete("/:id", (request, response) => {
    const mongoID = request.params.id;
    ToDo.remove({
        _id: mongoID,
    })
        .then((data) => {
            response.status(200).end();
        })
        .catch((error) => {
            response.status(404).send(error.message);
        });
});

app.post("/HabitTracker", (request, response) => {
    const HabitData = request.body;
    console.log('is this working?', HabitData)
    Habit.create(HabitData, function () {
        response.status(200).end();
    })
    // .then(function () {
    //     console.log('then on post')
    //     response.status(200).end();

    // })
    // .catch(function (error) {
    //     console.log('catch on post')
    //     response.status(404).send(error.message);
    // });
});

app.put('/api/updateScore/:id', function (req, res) {
    //Habit.update()
    console.log(`
            put route /api/
            
            req.body :${JSON.stringify(req.body)}
            req.params: ${req.params.id}
            `)
    Habit.updateOne({ _id: req.params.id }, { score: req.body.score })
        .then(data => {
            res.json(data)
        })

})

app.get('/api/sortedHabits/:id', function (req, res) {
    console.log(`
            sorted get route /api/
            
            req.body :${JSON.stringify(req.body)}
            req.params: ${req.params.id}
            `)

    Habit.find({ _id: req.params.id })
        // .limit(10)
        // .sort('score')
        .then(data => {
            res.json(data)
            console.log('get sorted Habits: ', data)
        })
        .catch(function () {
            response.status(404).end("Can not find and sort list!");
        });

});

// ****************** Define any API routes before this runs *****************************
app.get("*", (request, response) => {
    Habit.find({})
        .then(function (data) {
            response.status(200).json(data);
        })
        .catch(function () {
            response.status(404).end("404!! Information BLACK HOLE!!");
        });
});
//*************************************************************************************** */
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});