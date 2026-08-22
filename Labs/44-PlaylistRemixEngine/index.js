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

let flattenItem = flattenPlaylists(playlists);
console.log(flattenItem);
