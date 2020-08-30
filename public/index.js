init();

// i think by default, will call getLastWorkout in api.js
async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    console.log("in index.js, workout is: ", workout);
    if (workout) {
      console.log("in index.js, if workout = yes");
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

