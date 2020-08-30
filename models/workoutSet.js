const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercise: [{
    type: Schema.Types.ObjectId,
    ref: "EachWorkout"
  }]
});

const workoutSet = mongoose.model("workoutSet", workoutSchema);

module.exports = workoutSet;