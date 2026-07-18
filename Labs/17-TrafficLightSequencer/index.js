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
  for (const conf in config) {
    if (conf === "phases") {
      if (config[conf].length === 0) {
        console.log("No phases found");
        return;
      } else {
        for (let i = 0; i < cycles; i++) {
          for (let j = 0; j < config[conf].length; j++) {
            if (config[conf][j].duration <= 0) {
              console.log("Invalid phase detected");
              continue;
            } else {
              console.log(
                `Switching to ${config[conf][j].color} for ${config[conf][j].duration} s`,
              );
            }
          }
        }
      }
    } else {
      if (config[conf]) {
        console.log("Faulted phase!");
        break;
      }
    }
  }
}

function generateTimeline(config, cycles) {
  let arr = [];
  for (const conf in config) {
    if (conf === "phases") {
      if (config[conf].length === 0) {
        return [];
      } else {
        let sum = 0;
        const size = config[conf].length;
        for (let i = 0; i < cycles; i++) {
          for (let j = 0; j < size; j++) {
            sum += config[conf][j].duration; // Computing sum
            if (i === 0 && j === 0) {
              // First cycle and first array index
              arr.push(config[conf][j].duration);
            } else {
              arr.push(sum);
            }
          }
        }
      }
    }
    /* else {
      if (config[conf]) {
        return [];
      }
    }*/
  }
  return arr;
}

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
