# PlaylistRemixEngine

Building a Playlist Remix Engine Project.

## Source Code

```js
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
    {
      trackId: "trk104",
      artist: "Neon Harbor",
      title: "Happy Birthday",
      votes: 40,
      bpm: 108,
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
    {
      trackId: "trk203",
      artist: "Solar Echo",
      title: "Nice Job Dad",
      votes: 10,
      bpm: 15,
    },
    {
      trackId: "trk204",
      artist: "Solar Echo",
      title: "Go Up Yourself",
      votes: 7,
      bpm: 120,
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

  for (let i = 0; i < flattenTracks.length; i++) {
    if (scoreDedupeTracks.length === 0) {
      scoreDedupeTracks.push(flattenTracks[i]);
    } else {
      for (let j = 0; j < scoreDedupeTracks.length; j++) {
        if (flattenTracks[i].trackId === scoreDedupeTracks[j].trackId) {
          // Matched value found. Ignore the item.
          break;
        } else if ((j + 1) % scoreDedupeTracks.length === 0) {
          // No matched value found from the beginning to the end of the array, then and add current object to the output array.
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
      }
    }
  }

  return scoreDedupeTracks;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  if (!Array.isArray(tracks) || tracks.length === 0) {
    return;
  }

  let enforcedArtists = [];

  for (let i = 0, j = 1; i < tracks.length && j <= maxPerArtist; i++, j++) {
    if (enforcedArtists.length === 0) {
      enforcedArtists.push(tracks[i]);
    } else {
      const { trackId, artist, title, votes, bpm, score } = tracks[i];
      enforcedArtists.push({
        trackId: trackId,
        artist: artist,
        title: title,
        votes: votes,
        bpm: bpm,
        score: score,
      });
    }
  }

  return enforcedArtists;
}

function buildSchedule(tracks) {
  if (!Array.isArray(tracks) | (tracks.length === 0)) {
    return;
  }

  let trackArtists = [];

  for (let i = 0; i < tracks.length; i++) {
    const value = { slot: i + 1, trackId: tracks[i].trackId };
    trackArtists.push(value);
  }

  return trackArtists;
}

function remixPlaylist(playlists, maxAllowedArtist) {
  // Flattened playlist.
  const flatPlaylist = flattenPlaylists(playlists);

  // Score each playlist track.
  const scoredTrack = scoreTracks(flatPlaylist);

  // Dedupe track and remove duplicates.
  const dedupeTrack = dedupeTracks(scoredTrack);

  // Enforcing artist quota by selecting the desired number.
  const artistQuota = enforceArtistQuota(dedupeTrack, maxAllowedArtist);

  // finally, schedule artist and get the final output.
  const schedule = buildSchedule(artistQuota);

  return schedule;
}

const flattenedPlaylists = flattenPlaylists(playlists);
// console.log(flattenItem);

const flattenedScoreTracks = scoreTracks(flattenedPlaylists);
// console.log(flattenedScoreTracks);

const flattenedTracks = dedupeTracks(flattenedScoreTracks);
// console.log(flattenedTracks);

const enforcedTrack = enforceArtistQuota(flattenedTracks, 4);
// console.log(enforcedTrack); // Only 4 Artists

const scheduleArtist = buildSchedule(enforcedTrack);
// console.log(scheduleArtist);

// ====================== FINAL OUTPUT ========================

const scheduledTrack = remixPlaylist(playlists, 5); // 5 artist only.
console.log(scheduledTrack);
```

## Output

![Image](https://github.com/user-attachments/assets/358bbc85-d051-4fe9-92f8-2f787b40198f)
