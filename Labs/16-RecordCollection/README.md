# RecordCollection

Build a Record Collection Project.

## Source Code

```js
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (!value) {
    // Invalid value String (Empty string, null or undefined).
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (!Object.hasOwn(records[id], "tracks")) {
      records[id].tracks = [];
    }

    records[id].tracks.push(value);
  }

  return records;
}

let result = updateRecords(recordCollection, 2468, "tracks", null);
console.log(result);

result = updateRecords(recordCollection, 1245, "tracks", "ABBA");
console.log(result);

result = updateRecords(recordCollection, 5439, "tracks", "ABBA");
console.log(result);

result = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(result);

result = updateRecords(recordCollection, 2548, "artist", "");
console.log(result);

result = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(result);

result = updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(result);

result = updateRecords(recordCollection, 2548, "tracks", "");
console.log(result);
```

## Output

![Image](https://github.com/user-attachments/assets/6235ceb8-44ae-4a1d-bda4-4ebe27f123d3)
