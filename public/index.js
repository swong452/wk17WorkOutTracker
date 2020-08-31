init();

// init() is triggered when page FIRST load (see last config line) 
// i do NOT think this index.js is used when user mover cursor to
// Either continue workout or new workout.
// init() will call getLastWorkout that is defined in public / api.js
async function init() {
  console.log("Client side: Enter index.js asyn init()");
  if (location.search.split("=")[1] === undefined) {
    console.log("Client side: Enter index.js asyn init(), == undefined");
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log("Client side: Enter index.js asyn init(), if workout == true");
      location.search = "?id=" + workout._id;
    } else {
      console.log("Client side: Enter index.js asyn init(), enter ELSE");
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
  console.log("Client side: Enter index.js asyn init(), does not match undefined, EXIT");
}

