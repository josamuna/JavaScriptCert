/*
    This lab is about building a program that creates a single remix playlist 
    from multiple playlists submitted by listeners. 

    Each listener provides a list of songs they want to hear. 
    Some songs may appear more than once, and some artists may show up too many times. 
    Your job is to work through these playlists step by step: 
    1. Combine them into one list, 
    2. Score each song, 
    3. Remove duplicate songs, 
    4. Limit how often the same artist appears, and then 
    5. create a final play order.
*/

const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(arrayPlaylists) {
  if (!Array.isArray(arrayPlaylists) || arrayPlaylists.lenght === 0) {
    return [];
  }

  let flattenPlaylists = [];

  for (let i = 0; i < arrayPlaylists.length; i++) {
    for (let j = 0; j < arrayPlaylists[i].length; j++) {
      const { trackId, artist, title, votes, bpm } = arrayPlaylists[i][j];
      flattenPlaylists.push({
        trackId: trackId,
        artist: artist,
        title: title,
        votes: votes,
        bpm: bpm,
        source: [i, j],
      });
    }
  }

  return flattenPlaylists;
}

function scoreTracks(objTracks) {
  if (!Array.isArray(objTracks) || objTracks.length === 0) {
    return;
  }

  let flattenTracks = [];

  for (let i = 0; i < objTracks.length; i++) {
    const { trackId, artist, title, votes, bpm } = objTracks[i];
    const score = votes * 10 - Math.abs(bpm - 120);
    flattenTracks.push({
      trackId: trackId,
      artist: artist,
      title: title,
      votes: votes,
      bpm: bpm,
      score: score,
    });
  }

  return flattenTracks;
}

function dedupeTracks(flattenTracks) {
  if (!Array.isArray(flattenTracks) || flattenTracks.length === 0) {
    return;
  }

  let scoreDedupeTracks = [];
  let countMatchedFound = 0;

  for (let i = 0; i < flattenTracks.length; i++) {
    countMatchedFound = -1;

    for (let j = i + 1; j < flattenTracks.length; j++) {
      if (flattenTracks[i].trackId === flattenTracks[j].trackId) {
        // Matched value found. First occurrence.
        countMatchedFound += 1; // next occurrence will be skipped.
        console.log("===>", countMatchedFound);
        if (countMatchedFound === 0) {
          console.log(
            flattenTracks[i].trackId,
            " <=> ",
            flattenTracks[j].trackId,
          );
          // Add value in the output array only once.
          const { trackId, artist, title, votes, bpm, score } =
            flattenTracks[i];
          scoreDedupeTracks.push({
            trackId: trackId,
            artist: artist,
            title: title,
            votes: votes,
            bpm: bpm,
            score: score,
          });
        }
      } else {
        // No matched value found, and add to the output array.
        //const { trackId, artist, title, votes, bpm, score } = flattenTracks[i];
        //scoreDedupeTracks.push({ trackId: trackId, artist: artist, title: title, votes: votes, bpm: bpm, score: score });
      }
    }
  }

  return scoreDedupeTracks;
}

let flattenedPlaylists = flattenPlaylists(playlists);
// console.log(flattenItem);

let flattenedScoreTracks = scoreTracks(flattenedPlaylists);
// console.log(flattenedScoreTracks);

let flattenedTracks = dedupeTracks(flattenedScoreTracks);
console.log(flattenedTracks);
