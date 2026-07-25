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
