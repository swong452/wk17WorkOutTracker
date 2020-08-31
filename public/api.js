// This page serve to define function called by workout.js
// no listener here.
// NOtice define various functions in API variabe
const API = {
  async getLastWorkout() {
    let res;
    try {
      // Fetch will get all the workout of every day
      console.log("Client - enter public/api.js getLastWorkout()");
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    // res.json() will retrive an array of objects
    // each object is one day of work out.
    const json = await res.json();
    // length minus one , retrun the say 10th item, which is the very last work out
    console.log("Client - enter public/api.js getLastWorkout(), BEFORE -1, list of workout: ", json.length, json);
    return json[json.length - 1];
  },

  // Called from Exercise.html; this is to add more exercise
  // to the existing workout.
  async addExercise(data) {
    //Extract the 1st value after =, which is the id
    // this is the last workout id.
    const id = location.search.split("=")[1];
    console.log("Client - enter public/api.js , addExercise: ID", id);
    console.log("Client - enter public/api.js , addExercise: data", data);
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
