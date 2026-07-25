# FestivalCrowdFlowSimulator

Build a Festival Crowd Flow Simulator Project.

## Source Code

```js
/*
    This workshop use JavaScript to simulate the flow of attendees at a music festival.
    You will work with two datasets that describe the festival gates during morning and night shifts.

    Each gate object contains the following properties:
    1. id: A string that identifies the gate.
    2. capacity: The number of attendees the gate can process per tick.
    3. queue: An array of numbers representing how many attendees arrive at the gate during a specific tick.
*/

const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}

function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;
  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }
  return {
    processed: processed,
    overflow: currentTickQueue,
  };
}

function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id,
  );
}

function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\nProcessing " + gate.id + "...");
  console.log(gate.queue[tickIndex] + " attendees arriving.");
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  if (result.overflow > 0) {
    console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const gateId in summary) {
    console.log(gateId + ": " + summary[gateId] + " attendees processed");
  }
}

function simulateFestival(gates, timeBlock) {
  console.log("\n" + timeBlock + " Simulation");
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;
  while (tickIndex < maxTicks) {
    console.log("\nTick " + (tickIndex + 1));
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    tickIndex++;
  }
  printSummary(throughputSummary);
}

simulateFestival(morningGates, "Morning");

simulateFestival(nightGates, "Night");
```

## Output

![Image](https://github.com/user-attachments/assets/83d7c8a8-1b94-4c3d-ae00-b1557a8d822a)

![Image](https://github.com/user-attachments/assets/e35a1be4-8cba-4fee-a1f7-68dc8d7524e3)

![Image](https://github.com/user-attachments/assets/497d972e-0495-487e-868f-6b0c733113f1)

![Image](https://github.com/user-attachments/assets/a15cdb6e-2750-403e-933a-755dc7d16728)

![Image](https://github.com/user-attachments/assets/69f846b2-da9a-4228-8abb-bd59048958cd)

![Image](https://github.com/user-attachments/assets/d976f688-e7d4-49f9-aa57-aac9106389d1)

![Image](https://github.com/user-attachments/assets/d3b3e8ef-2a62-46bf-98e9-5ddde820bcf3)
