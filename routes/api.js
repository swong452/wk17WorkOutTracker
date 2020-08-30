const router = require("express").Router();
const db = require("../models");

// Return all work out by day
// each day is an object, that has all the exercise of that day
router.get("/api/workouts", (req, res) => {
    console.log("get workout API");
    db.Workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Display all burger, base on logic on index handlebars
// router.get("/", function (req, res) {
//     burger.all(function (data) {
//         console.log("inside burgerController");
//         var hbsObject = {
//             burger: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

module.exports = router;