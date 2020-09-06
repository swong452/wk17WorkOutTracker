const router = require("express").Router();
const db = require("../models");
const path = require("path");

// Return all work out by day
// each day is an object, that has all the exercise of that day
router.get("/api/workouts", (req, res) => {
    console.log("Server side, entered routes/api.js router.get/api/workouts");
    db.Workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// When browser click on "Continue workout"
// will redirect user to exercise page
// Note the redirect exercise page, will have the ID variable on the URL
// which is setup in workout.js initWorkout 
router.get("/exercise", (req, res) => {
    console.log("Server side, entered routes/api.js router.get/exercise", req.body);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// When user add exercises to the current workout
router.put("/api/workouts/:id", (req, res) => {
    console.log("Server side, entered routes/api.js: /api/workouts?:id, body", req.body);
    console.log("Server side, entered routes/api.js: /api/workouts?:id, ID param", req.params.id);
    db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    ).then(dbExercise => {
        console.log("Server side, entered routes/api.js: /api/workouts?:id, after PUSH", dbExercise);
        res.json(dbExercise);
    })
        .catch(err => {
            res.json(err);
        });
});

// redirect to stats page
router.get("/stats", (req, res) => {
    console.log("Server side, entered routes/api.js /stat");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})

// Handle stats.html route
router.get("/api/workouts/range", (req, res) => {
    console.log("Server side,entered routes/api.js router.get api/workouts/range");
    // db.Workout.find()
    db.Workout.find({}).limit(7)
    .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
})

// handle add new workout
router.post("/api/workouts", (req, res) => {
    console.log("Server side, entered routes/api.js: POST /api/workouts,", req.body);
    db.Workout.create(req.body).then(dbExercise => {
        console.log("Server side, entered routes/api.js: /api/workouts?:id, after create", dbExercise);
        res.json(dbExercise);
    })
        .catch(err => {
            res.json(err);
        });
})


module.exports = router;