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

function generateTimeline(config, cycles) {}

console.log("-----------1-----------------");

runSequence(config1, 1);

console.log("------------2----------------");

runSequence(config1, 2);

console.log("-------------3---------------");

runSequence(config2, 1);

console.log("-------------4---------------");

runSequence(config3, 2);

console.log("-------------5---------------");

runSequence(config4, 5);
