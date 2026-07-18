const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      sum += phase.duration; // Computing sum
      arr.push(sum);
    }
  }
  return arr;
}

// TO PASS THE CHALLENGE, THIS BELLOW LIGNES SHOULD BE REMOVED. THEY ARE USED ONLY FOR TESTING PURPOSE.

/*
  Switching to green for 5 s
  Switching to yellow for 2 s
  Switching to red for 4 s
*/
runSequence(config1, 1);

/*
  Switching to green for 5 s
  Switching to yellow for 2 s
  Switching to red for 4 s
  Switching to green for 5 s
  Switching to yellow for 2 s
  Switching to red for 4 s
*/
runSequence(config1, 2);

/*
  Switching to red for 3 s
  Invalid phase detected
  Switching to green for 6 s
*/
runSequence(config2, 1);

// Faulted phase!
runSequence(config3, 2);

// No phases found
runSequence(config4, 5);

console.log(generateTimeline(config1, 1)); // [5, 7, 11]

console.log(generateTimeline(config1, 2)); // [5, 7, 11, 16, 18, 22]

console.log(generateTimeline(config2, 2)); // [3, 1, 7, 10, 8, 14]

console.log(generateTimeline(config3, 1)); // [5, 7, 13]

console.log(generateTimeline(config4, 1)); // []
