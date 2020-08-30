const API = {
  async getLastWorkout() {
    let res;
    try {
      // Fetch will get all the workout of every day
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    // res.json() will retrive an array of objects
    // each object is one day of work out.
    const json = await res.json();
    // length minus one to get the very last work out
    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

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
