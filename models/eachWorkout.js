const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eachWorkoutSchema = new Schema({
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
});

const EachWorkout = mongoose.model("EachWorkout", eachWorkoutSchema);

module.exports = EachWorkout;