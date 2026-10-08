::writing{variant="document" id="58321" title="Improved Midnight Radio script.js"}

/* =========================================================
   MIDNIGHT RADIO
   Improved YouTube Music Player
========================================================= */


/* =========================================================
   PLAYLIST
========================================================= */

const songs = [

  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    id: "sBzrzS1Ag_g",
    duration: "3:38",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/sBzrzS1Ag_g/hqdefault.jpg"
  },

  {
    title: "Dracula",
    artist: "Tame Impala",
    id: "xnP7qKxwzjg",
    duration: "3:54",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/xnP7qKxwzjg/hqdefault.jpg"
  },

  {
    title: "Loser",
    artist: "Tame Impala",
    id: "J3_P_H_11mE",
    duration: "4:28",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/J3_P_H_11mE/hqdefault.jpg"
  },

  {
    title: "Borderline",
    artist: "Tame Impala",
    id: "vpbblMR_jUo",
    duration: "3:58",
    genre: "Psychedelic Pop",
    cover: "https://i.ytimg.com/vi/vpbblMR_jUo/hqdefault.jpg"
  },

  {
    title: "New Person, Same Old Mistakes",
    artist: "Tame Impala",
    id: "tO4Plmvd_38",
    duration: "6:05",
    genre: "Psychedelic Pop",
    cover: "https://i.ytimg.com/vi/tO4Plmvd_38/hqdefault.jpg"
  },

  {
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    id: "GCdwKhTtNNw",
    duration: "4:13",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/GCdwKhTtNNw/hqdefault.jpg"
  },

  {
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    id: "bpOSxM0rNPM",
    duration: "4:26",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/bpOSxM0rNPM/hqdefault.jpg"
  },

  {
    title: "Babydoll",
    artist: "Dominic Fike",
    id: "x9U_K6C_qgU",
    duration: "1:40",
    genre: "Alternative",
    cover: "https://i.ytimg.com/vi/x9U_K6C_qgU/hqdefault.jpg"
  },

  {
    title: "Bad Habit",
    artist: "Steve Lacy",
    id: "VF-r5TtlT9w",
    duration: "4:03",
    genre: "R&B / Soul",
    cover: "https://i.ytimg.com/vi/VF-r5TtlT9w/hqdefault.jpg"
  },

  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    id: "nyuo9-OjNNg",
    duration: "3:04",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/nyuo9-OjNNg/hqdefault.jpg"
  },

  {
    title: "505",
    artist: "Arctic Monkeys",
    id: "qU9mHegkTc4",
    duration: "4:14",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/qU9mHegkTc4/hqdefault.jpg"
  },

  {
    title: "We Are The People",
    artist: "Empire Of The Sun",
    id: "hN5X4kGhAtU",
    duration: "5:12",
    genre: "Electropop",
    cover: "https://i.ytimg.com/vi/hN5X4kGhAtU/hqdefault.jpg"
  },

  {
    title: "Let It Happen",
    artist: "Tame Impala",
    id: "pFpt7PAUR7U",
    duration: "7:51",
    genre: "Psychedelic Rock",
    cover: "https://i.ytimg.com/vi/pFpt7PAUR7U/hqdefault.jpg"
  },

  {
    title: "As It Was",
    artist: "Harry Styles",
    id: "H5v3kku4y6Q",
    duration: "2:46",
    genre: "Pop",
    cover: "https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg"
  },

  {
    title: "Too Sweet",
    artist: "Hozier",
    id: "a7fzkqL_Vog",
    duration: "4:12",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/a7fzkqL_Vog/hqdefault.jpg"
  },

  {
    title: "back to friends",
    artist: "sombr",
    id: "uKq1U1jH3t8",
    duration: "3:22",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/uKq1U1jH3t8/hqdefault.jpg"
  },

  {
    title: "Self Aware",
    artist: "Temper City",
    id: "yA8P_1T3z-E",
    duration: "3:01",
    genre: "Indie",
    cover: "https://i.ytimg.com/vi/yA8P_1T3z-E/hqdefault.jpg"
  },

  {
    title: "End Of Beginning",
    artist: "Djo",
    id: "E29o3WcM3L4",
    duration: "2:40",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/E29o3WcM3L4/hqdefault.jpg"
  },

  {
    title: "Riptide",
    artist: "Vance Joy",
    id: "uJ_1HMAGb4k",
    duration: "3:25",
    genre: "Indie Folk",
    cover: "https://i.ytimg.com/vi/uJ_1HMAGb4k/hqdefault.jpg"
  },

  {
    title: "Electric Love",
    artist: "BØRNS",
    id: "RYr96YYEaNc",
    duration: "3:41",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/RYr96YYEaNc/hqdefault.jpg"
  },

  {
    title: "Circles",
    artist: "Post Malone",
    id: "wXhTHyIgQ_U",
    duration: "3:47",
    genre: "Pop / R&B",
    cover: "https://i.ytimg.com/vi/wXhTHyIgQ_U/hqdefault.jpg"
  },

  {
    title: "Dancin (Krono Remix)",
    artist: "Aaron Smith ft. Luvli",
    id: "0XFudmaObLI",
    duration: "4:04",
    genre: "Deep House",
    cover: "https://i.ytimg.com/vi/0XFudmaObLI/hqdefault.jpg"
  },

  {
    title: "I Follow Rivers (Lykke Li)",
    artist: "Aldo Zuga",
    id: "v1N63I1v77k",
    duration: "4:44",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/v1N63I1v77k/hqdefault.jpg"
  },

  {
    title: "Walking On A Dream",
    artist: "Empire Of The Sun",
    id: "eimgRedLkkU",
    duration: "3:20",
    genre: "Electropop",
    cover: "https://i.ytimg.com/vi/eimgRedLkkU/hqdefault.jpg"
  },

  {
    title: "Pumped Up Kicks",
    artist: "Foster The People",
    id: "SDTZ7iX4vTQ",
    duration: "4:16",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/SDTZ7iX4vTQ/hqdefault.jpg"
  },

  {
    title: "Get Lucky",
    artist: "Daft Punk ft. Pharrell Williams, Nile Rodgers",
    id: "5NV6Rdv1a3E",
    duration: "4:09",
    genre: "Disco / Funk",
    cover: "https://i.ytimg.com/vi/5NV6Rdv1a3E/hqdefault.jpg"
  },

  {
    title: "Midnight City",
    artist: "M83",
    id: "dX3k_QDnzHE",
    duration: "4:04",
    genre: "Synthwave",
    cover: "https://i.ytimg.com/vi/dX3k_QDnzHE/hqdefault.jpg"
  },

  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    id: "XXYlFuWEuKI",
    duration: "4:09",
    genre: "Synth-pop",
    cover: "https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg"
  },

  {
    title: "Softcore",
    artist: "The Neighbourhood",
    id: "gJZP4YIsA74",
    duration: "3:31",
    genre: "Alternative",
    cover: "https://i.ytimg.com/vi/gJZP4YIsA74/hqdefault.jpg"
  },

  {
    title: "My Old Ways",
    artist: "Tame Impala",
    id: "J9Q3Z3v3XqU",
    duration: "5:19",
    genre: "Psychedelic Pop",
    cover: "https://i.ytimg.com/vi/J9Q3Z3v3XqU/hqdefault.jpg"
  },

  {
    title: "Is It True",
    artist: "Tame Impala",
    id: "24C833B-_8k",
    duration: "3:59",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/24C833B-_8k/hqdefault.jpg"
  },

  {
    title: "Lady (Hear Me Tonight)",
    artist: "Modjo",
    id: "mMfxI3r_LyA",
    duration: "3:42",
    genre: "French House",
    cover: "https://i.ytimg.com/vi/mMfxI3r_LyA/hqdefault.jpg"
  },

  {
    title: "Feel Good Inc.",
    artist: "Gorillaz",
    id: "HyHNuVaZJ-k",
    duration: "4:15",
    genre: "Alternative Hip Hop",
    cover: "https://i.ytimg.com/vi/HyHNuVaZJ-k/hqdefault.jpg"
  },

  {
    title: "Stressed Out",
    artist: "twenty one pilots",
    id: "pXRviuL6v_5",
    duration: "3:46",
    genre: "Alternative",
    cover: "https://i.ytimg.com/vi/pXRviuL6v_5/hqdefault.jpg"
  },

  {
    title: "All The Stars",
    artist: "Kendrick Lamar, SZA",
    id: "GfCqMv37I34",
    duration: "3:55",
    genre: "Hip Hop / R&B",
    cover: "https://i.ytimg.com/vi/GfCqMv37I34/hqdefault.jpg"
  },

  {
    title: "Pink + White",
    artist: "Frank Ocean",
    id: "r4l9bFqgMaQ",
    duration: "3:05",
    genre: "R&B",
    cover: "https://i.ytimg.com/vi/r4l9bFqgMaQ/hqdefault.jpg"
  },

  {
    title: "SEE YOU AGAIN",
    artist: "Tyler, The Creator ft. Kali Uchis",
    id: "TGgcC54LEA8",
    duration: "3:23",
    genre: "Hip Hop",
    cover: "https://i.ytimg.com/vi/TGgcC54LEA8/hqdefault.jpg"
  },

  {
    title: "Flashing Lights",
    artist: "Kanye West ft. Dwele",
    id: "ila-hAUXM5s",
    duration: "2:54",
    genre: "Hip Hop",
    cover: "https://i.ytimg.com/vi/ila-hAUXM5s/hqdefault.jpg"
  },

  {
    title: "Heat Waves",
    artist: "Glass Animals",
    id: "mRD0-GxqHVo",
    duration: "3:56",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/mRD0-GxqHVo/hqdefault.jpg"
  },

  {
    title: "I Feel It Coming",
    artist: "The Weeknd ft. Daft Punk",
    id: "qFLhGq0060w",
    duration: "4:58",
    genre: "R&B / Disco",
    cover: "https://i.ytimg.com/vi/qFLhGq0060w/hqdefault.jpg"
  },

  {
    title: "Why'd You Only Call Me When You're High?",
    artist: "Arctic Monkeys",
    id: "6366dxFf-Os",
    duration: "2:42",
    genre: "Indie Rock",
    cover: "https://i.ytimg.com/vi/6366dxFf-Os/hqdefault.jpg"
  },

  {
    title: "Feels Like We Only Go Backwards",
    artist: "Tame Impala",
    id: "wycznJB5630",
    duration: "3:20",
    genre: "Psychedelic Rock",
    cover: "https://i.ytimg.com/vi/wycznJB5630/hqdefault.jpg"
  },

  {
    title: "Can I Call You Tonight?",
    artist: "Dayglow",
    id: "434I3S0O7jE",
    duration: "5:00",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/434I3S0O7jE/hqdefault.jpg"
  },

  {
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    id: "sElE_BfQ67s",
    duration: "4:51",
    genre: "Ambient Pop",
    cover: "https://i.ytimg.com/vi/sElE_BfQ67s/hqdefault.jpg"
  },

  {
    title: "Mrs Magic",
    artist: "Strawberry Guy",
    id: "0WkR3n4T7wU",
    duration: "3:29",
    genre: "Indie Pop",
    cover: "https://i.ytimg.com/vi/0WkR3n4T7wU/hqdefault.jpg"
  }

];


/* =========================================================
   PLAYER STATE
========================================================= */

const STORAGE = {
  favorites: "midnightFavorites",
  theme: "midnightTheme",
  currentSong: "midnightCurrentSong",
  volume: "midnightVolume",
  repeat: "midnightRepeat",
  recentlyPlayed: "midnightRecentlyPlayed"
};

let player = null;
let isReady = false;

let currentIndex = 0;
let currentQueue = [...songs];
let queueIndex = 0;

let isLoadingSong = false;
let userHasInteracted = false;

let repeatMode =
  localStorage.getItem(STORAGE.repeat) || "off";

let volume =
  Number(localStorage.getItem(STORAGE.volume));

if (!Number.isFinite(volume)) {
  volume = 80;
}

let favorites =
  readStorage(STORAGE.favorites, []);

let recentlyPlayed =
  readStorage(STORAGE.recentlyPlayed, []);

let failedSongs =
  new Set();


/* =========================================================
   STORAGE HELPERS
========================================================= */

function readStorage(key, fallback) {

  try {

    const value =
      localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    return JSON.parse(value);

  } catch (error) {

    console.warn(
      `Could not read localStorage key: ${key}`,
      error
    );

    return fallback;

  }

}


function writeStorage(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.warn(
      `Could not save localStorage key: ${key}`,
      error
    );

  }

}


/* =========================================================
   CURRENT SONG
========================================================= */

function getCurrentSong() {

  return songs[currentIndex] || null;

}


function getSongKey(song) {

  if (!song) return "";

  return song.id || song.title;

}


/* =========================================================
   YOUTUBE API
========================================================= */

function onYouTubeIframeAPIReady() {

  console.log("YouTube API loaded.");

  const container =
    document.getElementById("youtube-player");

  if (!container) {

    console.error(
      "Missing #youtube-player element."
    );

    return;

  }

  player =
    new YT.Player(
      "youtube-player",
      {

        width: "100%",
        height: "100%",

        videoId: getCurrentSong()?.id || "",

        playerVars: {

          autoplay: 0,
          controls: 1,
          rel: 0,
          playsinline: 1,
          modestbranding: 1

        },

        events: {

          onReady: handlePlayerReady,

          onStateChange:
            handlePlayerStateChange,

          onError:
            handlePlayerError,

          onAutoplayBlocked:
            handleAutoplayBlocked

        }

      }
    );

}


/* =========================================================
   PLAYER READY
========================================================= */

function handlePlayerReady(event) {

  console.log("YouTube player ready.");

  isReady = true;

  player.setVolume(volume);

  updateInterface();

  updatePlayButton();

  updateMediaSession();

  restoreSavedSong();

}


/* =========================================================
   RESTORE LAST SONG
========================================================= */

function restoreSavedSong() {

  const savedId =
    localStorage.getItem(
      STORAGE.currentSong
    );

  if (!savedId) return;

  const savedIndex =
    songs.findIndex(
      song => song.id === savedId
    );

  if (savedIndex === -1) return;

  currentIndex = savedIndex;

  const position =
    songs.findIndex(
      song => song.id === savedId
    );

  if (position >= 0) {
    queueIndex = position;
  }

  updateInterface();

}


/* =========================================================
   PLAYER STATE
========================================================= */

function handlePlayerStateChange(event) {

  updatePlayButton();

  if (
    event.data ===
    YT.PlayerState.PLAYING
  ) {

    isLoadingSong = false;

    setPlayerStatus("Playing");

    updateMediaSession();

  }


  if (
    event.data ===
    YT.PlayerState.PAUSED
  ) {

    setPlayerStatus("Paused");

    if (
      "mediaSession" in navigator
    ) {

      try {
        navigator.mediaSession.playbackState =
          "paused";
      } catch (_) {}

    }

  }


  if (
    event.data ===
    YT.PlayerState.BUFFERING
  ) {

    setPlayerStatus("Buffering…");

  }


  if (
    event.data ===
    YT.PlayerState.ENDED
  ) {

    handleSongEnded();

  }

}


/* =========================================================
   PLAYER ERROR
========================================================= */

function handlePlayerError(event) {

  const errorCode =
    event.data;

  const errors = {

    2:
      "Invalid YouTube video ID.",

    5:
      "YouTube HTML5 player error.",

    100:
      "This video is unavailable.",

    101:
      "This video cannot be embedded.",

    150:
      "This video cannot be embedded.",

    153:
      "YouTube could not identify the embed request."

  };


  const message =
    errors[errorCode] ||
    "This song could not be played.";


  console.error(
    "YouTube error:",
    errorCode,
    message
  );


  const song =
    getCurrentSong();


  if (song) {

    failedSongs.add(
      getSongKey(song)
    );

  }


  setPlayerStatus("Unavailable");

  showToast(
    `${song?.title || "Song"} — ${message}`
  );


  /*
   * Automatically attempt another song.
   */

  setTimeout(
    () => {

      playNextAvailable();

    },
    700
  );

}


/* =========================================================
   AUTOPLAY BLOCKED
========================================================= */

function handleAutoplayBlocked() {

  console.warn(
    "Autoplay was blocked by the browser."
  );

  showToast(
    "Press play to start listening."
  );

}


/* =========================================================
   PLAY SONG
========================================================= */

function playSong(index, options = {}) {

  const {
    fromQueue = false,
    userAction = true
  } = options;


  if (
    index < 0 ||
    index >= songs.length
  ) {

    return;

  }


  currentIndex = index;

  userHasInteracted =
    userHasInteracted || userAction;


  if (!fromQueue) {

    const queuePosition =
      currentQueue.findIndex(
        song =>
          getSongKey(song) ===
          getSongKey(songs[index])
      );

    if (queuePosition >= 0) {
      queueIndex = queuePosition;
    }

  }


  const song =
    getCurrentSong();


  if (!song) return;


  if (
    failedSongs.has(
      getSongKey(song)
    )
  ) {

    playNextAvailable();

    return;

  }


  saveCurrentSong();

  addRecentlyPlayed(song);

  updateInterface();

  updateMediaSession();

  setPlayerStatus("Loading…");


  if (!player || !isReady) {

    showToast(
      "Player is still loading…"
    );

    return;

  }


  isLoadingSong = true;


  try {

    player.loadVideoById(
      song.id
    );

  } catch (error) {

    console.error(
      "Could not load song:",
      error
    );

    handlePlayerError({
      data: 100
    });

  }

}


/* =========================================================
   PLAY FIRST
========================================================= */

function playFirst() {

  if (!currentQueue.length) {

    currentQueue =
      [...songs];

    queueIndex = 0;

  }


  const firstSong =
    currentQueue[0];

  const index =
    songs.indexOf(firstSong);


  if (index >= 0) {

    playSong(
      index,
      {
        fromQueue: true,
        userAction: true
      }
    );

  }

}


/* =========================================================
   TOGGLE PLAY
========================================================= */

function togglePlay() {

  userHasInteracted = true;


  if (!player || !isReady) {

    showToast(
      "Player is still loading…"
    );

    return;

  }


  const state =
    player.getPlayerState();


  if (
    state ===
    YT.PlayerState.PLAYING
  ) {

    player.pauseVideo();

    return;

  }


  /*
   * If nothing meaningful has loaded,
   * start the current song.
   */

  if (
    state ===
      YT.PlayerState.UNSTARTED ||
    state ===
      YT.PlayerState.CUED ||
    state ===
      -1
  ) {

    const song =
      getCurrentSong();

    if (song) {

      player.loadVideoById(
        song.id
      );

    }

    return;

  }


  player.playVideo();

}


/* =========================================================
   NEXT SONG
========================================================= */

function nextSong() {

  if (!currentQueue.length) {

    currentQueue =
      [...songs];

  }


  if (
    repeatMode === "one"
  ) {

    replayCurrent();

    return;

  }


  queueIndex++;


  if (
    queueIndex >=
    currentQueue.length
  ) {

    if (
      repeatMode === "all"
    ) {

      queueIndex = 0;

    } else {

      queueIndex =
        currentQueue.length - 1;

      showToast(
        "You've reached the end of the queue."
      );

      return;

    }

  }


  playQueueIndex();

}


/* =========================================================
   PREVIOUS SONG
========================================================= */

function previousSong() {

  if (!currentQueue.length) {
    return;
  }


  /*
   * If the song is more than 3 seconds in,
   * restart it instead of going backwards.
   */

  if (
    player &&
    isReady &&
    typeof player.getCurrentTime ===
      "function"
  ) {

    const time =
      player.getCurrentTime();

    if (time > 3) {

      player.seekTo(
        0,
        true
      );

      return;

    }

  }


  queueIndex--;


  if (queueIndex < 0) {

    if (
      repeatMode === "all"
    ) {

      queueIndex =
        currentQueue.length - 1;

    } else {

      queueIndex = 0;

      showToast(
        "Already at the first song."
      );

      return;

    }

  }


  playQueueIndex();

}


/* =========================================================
   PLAY QUEUE INDEX
========================================================= */

function playQueueIndex() {

  if (
    queueIndex < 0 ||
    queueIndex >= currentQueue.length
  ) {

    return;

  }


  const song =
    currentQueue[queueIndex];


  const index =
    songs.indexOf(song);


  if (index === -1) {
    return;
  }


  playSong(
    index,
    {
      fromQueue: true,
      userAction: true
    }
  );

}


/* =========================================================
   PLAY NEXT AVAILABLE
========================================================= */

function playNextAvailable() {

  if (!currentQueue.length) {

    showToast(
      "No songs available."
    );

    return;

  }


  let attempts = 0;


  while (
    attempts <
    currentQueue.length
  ) {

    queueIndex++;


    if (
      queueIndex >=
      currentQueue.length
    ) {

      queueIndex = 0;

    }


    const candidate =
      currentQueue[queueIndex];


    const key =
      getSongKey(candidate);


    if (
      !failedSongs.has(key)
    ) {

      const index =
        songs.indexOf(candidate);


      if (index >= 0) {

        playSong(
          index,
          {
            fromQueue: true,
            userAction: true
          }
        );

        return;

      }

    }


    attempts++;

  }


  showToast(
    "No playable songs were found in this queue."
  );

}


/* =========================================================
   SONG ENDED
========================================================= */

function handleSongEnded() {

  if (
    repeatMode === "one"
  ) {

    replayCurrent();

    return;

  }


  nextSong();

}


/* =========================================================
   REPLAY
========================================================= */

function replayCurrent() {

  if (!player || !isReady) {
    return;
  }


  player.seekTo(
    0,
    true
  );

  player.playVideo();

}


/* =========================================================
   PLAYLIST RENDERING
========================================================= */

function renderSongs(list = currentQueue) {

  const container =
    document.getElementById(
      "songList"
    );

  if (!container) return;


  container.innerHTML = "";


  if (!list.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div style="
          padding:40px;
          text-align:center;
          color:#777;
        ">
          No songs found.
        <br>
        <small>
          Try another search or mood.
        </small>
      </div>
    `;

    return;

  }


  list.forEach(
    (song, index) => {

      const realIndex =
        songs.indexOf(song);


      if (realIndex < 0) {
        return;
      }


      const key =
        getSongKey(song);


      const favorite =
        favorites.includes(key);


      const playing =
        realIndex === currentIndex;


      const div =
        document.createElement("div");


      div.className =
        `song ${
          playing
            ? "playing"
            : ""
        }`;


      div.innerHTML = `

        <div class="song-number">
          ${
            playing
              ? "♪"
              : String(index + 1)
                  .padStart(2, "0")
          }
        </div>

        <div class="cover">

          <img
            src="${escapeHTML(song.cover)}"
            alt="${escapeHTML(song.title)}"
            loading="lazy"
          >

        </div>

        <div class="song-info">

          <div class="song-title">
            ${escapeHTML(song.title)}
          </div>

          <div class="song-artist">
            ${escapeHTML(song.artist)}
          </div>

        </div>

        <div class="song-duration">
          ${escapeHTML(song.duration)}
        </div>

        <button
          class="song-favorite ${
            favorite
              ? "favorite"
              : ""
          }"
          type="button"
          aria-label="${
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }"
        >
          ${
            favorite
              ? "♥"
              : "♡"
          }
        </button>

      `;


      div.addEventListener(
        "click",
        () => {

          queueIndex =
            index;

          playSong(
            realIndex,
            {
              fromQueue: true,
              userAction: true
            }
          );

        }
      );


      const favoriteButton =
        div.querySelector(
          ".song-favorite"
        );


      favoriteButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          toggleFavorite(
            realIndex
          );

        }
      );


      container.appendChild(div);

    }
  );

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(index) {

  const song =
    songs[index];

  if (!song) return;


  const key =
    getSongKey(song);


  if (
    favorites.includes(key)
  ) {

    favorites =
      favorites.filter(
        item =>
          item !== key
      );

  } else {

    favorites.push(key);

  }


  writeStorage(
    STORAGE.favorites,
    favorites
  );


  updateCurrentFavorite();

  renderSongs(currentQueue);

}


/* =========================================================
   CURRENT FAVORITE
========================================================= */

function toggleCurrentFavorite() {

  toggleFavorite(
    currentIndex
  );

}


function updateCurrentFavorite() {

  const button =
    document.getElementById(
      "currentFavorite"
    );

  if (!button) return;


  const song =
    getCurrentSong();

  if (!song) return;


  const favorite =
    favorites.includes(
      getSongKey(song)
    );


  button.textContent =
    favorite
      ? "♥"
      : "♡";


  button.classList.toggle(
    "favorite",
    favorite
  );


  button.setAttribute(
    "aria-label",
    favorite
      ? "Remove from favorites"
      : "Add current song to favorites"
  );

}


/* =========================================================
   SHOW FAVORITES
========================================================= */

function showFavorites() {

  currentQueue =
    songs.filter(
      song =>
        favorites.includes(
          getSongKey(song)
        )
    );


  queueIndex =
    Math.max(
      0,
      currentQueue.findIndex(
        song =>
          getSongKey(song) ===
          getSongKey(
            getCurrentSong()
          )
      )
    );


  renderSongs(
    currentQueue
  );


  setActiveNav(
    "favorites"
  );


  closeSidebar();

}


/* =========================================================
   SEARCH
========================================================= */

function searchSongs() {

  const input =
    document.getElementById(
      "searchInput"
    );

  if (!input) return;


  const query =
    input.value
      .toLowerCase()
      .trim();


  if (!query) {

    currentQueue =
      [...songs];

  } else {

    currentQueue =
      songs.filter(
        song => {

          const title =
            song.title
              .toLowerCase();

          const artist =
            song.artist
              .toLowerCase();

          const genre =
            song.genre
              .toLowerCase();


          return (
            title.includes(query) ||
            artist.includes(query) ||
            genre.includes(query)
          );

        }
      );

  }


  syncQueueIndex();

  renderSongs(
    currentQueue
  );


  setActiveNav(
    "search"
  );

}


/* =========================================================
   MOOD FILTER
========================================================= */

function filterMood(mood) {

  const normalized =
    String(mood || "")
      .toLowerCase()
      .trim();


  if (
    !normalized ||
    normalized === "all"
  ) {

    currentQueue =
      [...songs];

    setActiveNav(
      "home"
    );

  } else {

    currentQueue =
      songs.filter(
        song =>
          song.genre
            .toLowerCase()
            .includes(normalized)
      );

  }


  syncQueueIndex();

  renderSongs(
    currentQueue
  );


  closeSidebar();

}


/* =========================================================
   SHUFFLE
========================================================= */

function shufflePlaylist() {

  if (
    currentQueue.length < 2
  ) {

    showToast(
      "Not enough songs to shuffle."
    );

    return;

  }


  const currentSong =
    getCurrentSong();


  const shuffled =
    [...currentQueue];


  for (
    let i =
      shuffled.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );


    [
      shuffled[i],
      shuffled[j]
    ] =
    [
      shuffled[j],
      shuffled[i]
    ];

  }


  /*
   * Keep currently playing song
   * near the beginning of the queue.
   */

  if (currentSong) {

    const currentPosition =
      shuffled.findIndex(
        song =>
          getSongKey(song) ===
          getSongKey(currentSong)
      );


    if (currentPosition > 0) {

      [
        shuffled[0],
        shuffled[currentPosition]
      ] =
      [
        shuffled[currentPosition],
        shuffled[0]
      ];

    }

  }


  currentQueue =
    shuffled;


  syncQueueIndex();

  renderSongs(
    currentQueue
  );


  if (currentQueue.length) {

    queueIndex =
      Math.min(
        queueIndex,
        currentQueue.length - 1
      );

  }


  showToast(
    "Queue shuffled."
  );

}


/* =========================================================
   REPEAT
========================================================= */

function toggleRepeat() {

  const modes =
    ["off", "all", "one"];


  const current =
    modes.indexOf(
      repeatMode
    );


  repeatMode =
    modes[
      (current + 1) %
      modes.length
    ];


  localStorage.setItem(
    STORAGE.repeat,
    repeatMode
  );


  updateRepeatButton();

  showToast(
    `Repeat: ${
      repeatMode === "off"
        ? "Off"
        : repeatMode === "all"
          ? "All"
          : "One"
    }`
  );

}


function updateRepeatButton() {

  const button =
    document.getElementById(
      "repeatButton"
    );

  if (!button) return;


  button.classList.toggle(
    "active",
    repeatMode !== "off"
  );


  button.textContent =
    repeatMode === "one"
      ? "🔂"
      : "🔁";


  button.title =
    `Repeat: ${
      repeatMode === "off"
        ? "Off"
        : repeatMode === "all"
          ? "All"
          : "One"
    }`;

}


/* =========================================================
   QUEUE SYNC
========================================================= */

function syncQueueIndex() {

  const currentSong =
    getCurrentSong();


  if (!currentSong) {

    queueIndex = 0;

    return;

  }


  const found =
    currentQueue.findIndex(
      song =>
        getSongKey(song) ===
        getSongKey(currentSong)
    );


  queueIndex =
    found >= 0
      ? found
      : 0;

}


/* =========================================================
   RECENTLY PLAYED
========================================================= */

function addRecentlyPlayed(song) {

  if (!song) return;


  const key =
    getSongKey(song);


  recentlyPlayed =
    recentlyPlayed.filter(
      item => item !== key
    );


  recentlyPlayed.unshift(
    key
  );


  recentlyPlayed =
    recentlyPlayed.slice(
      0,
      20
    );


  writeStorage(
    STORAGE.recentlyPlayed,
    recentlyPlayed
  );

}


/* =========================================================
   SAVE CURRENT SONG
========================================================= */

function saveCurrentSong() {

  const song =
    getCurrentSong();


  if (!song) return;


  localStorage.setItem(
    STORAGE.currentSong,
    song.id
  );

}


/* =========================================================
   INTERFACE
========================================================= */

function updateInterface() {

  const song =
    getCurrentSong();


  if (!song) return;


  const title =
    document.getElementById(
      "playingTitle"
    );


  const artist =
    document.getElementById(
      "playingArtist"
    );


  const mobileTitle =
    document.getElementById(
      "mobileTitle"
    );


  const mobileArtist =
    document.getElementById(
      "mobileArtist"
    );


  if (title) {
    title.textContent =
      song.title;
  }


  if (artist) {
    artist.textContent =
      song.artist;
  }


  if (mobileTitle) {
    mobileTitle.textContent =
      song.title;
  }


  if (mobileArtist) {
    mobileArtist.textContent =
      song.artist;
  }


  updateMobileCover();

  updateCurrentFavorite();

  updatePlayButton();

  renderSongs(
    currentQueue
  );

}


/* =========================================================
   MOBILE COVER
========================================================= */

function updateMobileCover() {

  const container =
    document.getElementById(
      "mobileCover"
    );


  const song =
    getCurrentSong();


  if (!container || !song) {
    return;
  }


  container.innerHTML = `

    <img
      src="${escapeHTML(song.cover)}"
      alt="${escapeHTML(song.title)}"
      style="
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:8px;
      "
    >

  `;

}


/* =========================================================
   PLAY BUTTON
========================================================= */

function updatePlayButton() {

  const button =
    document.getElementById(
      "playButton"
    );


  const mobile =
    document.getElementById(
      "mobilePlay"
    );


  let playing =
    false;


  if (
    player &&
    isReady &&
    typeof player.getPlayerState ===
      "function"
  ) {

    playing =
      player.getPlayerState() ===
      YT.PlayerState.PLAYING;

  }


  if (button) {

    button.textContent =
      playing
        ? "Ⅱ"
        : "▶";

    button.title =
      playing
        ? "Pause"
        : "Play";

  }


  if (mobile) {

    mobile.textContent =
      playing
        ? "Ⅱ"
        : "▶";

  }

}


/* =========================================================
   PLAYER STATUS
========================================================= */

function setPlayerStatus(status) {

  const indicator =
    document.querySelector(
      ".now-playing > span"
    );


  if (!indicator) return;


  indicator.textContent =
    status === "Playing"
      ? "NOW PLAYING"
      : status.toUpperCase();

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

  if (
    !player ||
    !isReady ||
    typeof player.getCurrentTime !==
      "function"
  ) {

    return;

  }


  const current =
    player.getCurrentTime() || 0;


  const duration =
    player.getDuration() || 0;


  const percentage =
    duration > 0
      ? (current / duration) * 100
      : 0;


  const progress =
    document.getElementById(
      "progressBar"
    );


  const currentTime =
    document.getElementById(
      "currentTime"
    );


  const durationElement =
    document.getElementById(
      "totalTime"
    );


  if (progress) {

    progress.value =
      percentage;

  }


  if (currentTime) {

    currentTime.textContent =
      formatTime(current);

  }


  if (durationElement) {

    durationElement.textContent =
      formatTime(duration);

  }

}


/* =========================================================
   SEEK
========================================================= */

function seekSong(value) {

  if (
    !player ||
    !isReady
  ) {

    return;

  }


  const duration =
    player.getDuration();


  if (!duration) {
    return;
  }


  const time =
    duration *
    (Number(value) / 100);


  player.seekTo(
    time,
    true
  );

}


/* =========================================================
   VOLUME
========================================================= */

function setVolume(value) {

  const newVolume =
    Math.max(
      0,
      Math.min(
        100,
        Number(value)
      )
    );


  volume =
    Number.isFinite(newVolume)
      ? newVolume
      : 80;


  localStorage.setItem(
    STORAGE.volume,
    String(volume)
  );


  if (
    player &&
    isReady
  ) {

    player.setVolume(
      volume
    );

  }


  updateVolumeUI();

}


function toggleMute() {

  if (
    !player ||
    !isReady
  ) {

    return;

  }


  if (
    player.isMuted()
  ) {

    player.unMute();

    player.setVolume(
      volume || 80
    );

  } else {

    player.mute();

  }


  updateVolumeUI();

}


function updateVolumeUI() {

  const slider =
    document.getElementById(
      "volumeSlider"
    );


  if (slider) {

    slider.value =
      volume;

  }

}


/* =========================================================
   MEDIA SESSION
========================================================= */

function updateMediaSession() {

  if (
    !("mediaSession" in navigator)
  ) {

    return;

  }


  const song =
    getCurrentSong();


  if (!song) return;


  try {

    navigator.mediaSession.metadata =
      new MediaMetadata({

        title:
          song.title,

        artist:
          song.artist,

        album:
          "Midnight Radio",

        artwork: [

          {
            src:
              song.cover,

            sizes:
              "480x360",

            type:
              "image/jpeg"
          }

        ]

      });


    navigator.mediaSession.setActionHandler(
      "play",
      () => {

        if (player) {
          player.playVideo();
        }

      }
    );


    navigator.mediaSession.setActionHandler(
      "pause",
      () => {

        if (player) {
          player.pauseVideo();
        }

      }
    );


    navigator.mediaSession.setActionHandler(
      "nexttrack",
      nextSong
    );


    navigator.mediaSession.setActionHandler(
      "previoustrack",
      previousSong
    );


  } catch (error) {

    console.warn(
      "Media Session setup failed:",
      error
    );

  }

}


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    const target =
      event.target;


    const typing =
      target &&
      (
        target.tagName ===
          "INPUT" ||
        target.tagName ===
          "TEXTAREA" ||
        target.isContentEditable
      );


    if (typing) {
      return;
    }


    if (
      event.code ===
      "Space"
    ) {

      event.preventDefault();

      togglePlay();

    }


    if (
      event.code ===
      "ArrowRight"
    ) {

      nextSong();

    }


    if (
      event.code ===
      "ArrowLeft"
    ) {

      previousSong();

    }

  }
);


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

  const sidebar =
    document.querySelector(
      ".sidebar"
    );


  if (!sidebar) return;


  sidebar.classList.toggle(
    "open"
  );

}


function closeSidebar() {

  const sidebar =
    document.querySelector(
      ".sidebar"
    );


  if (sidebar) {

    sidebar.classList.remove(
      "open"
    );

  }

}


/* =========================================================
   SEARCH FOCUS
========================================================= */

function focusSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );


  if (!input) return;


  input.focus();

  closeSidebar();

}


/* =========================================================
   NAVIGATION STATE
========================================================= */

function setActiveNav(type) {

  const navItems =
    document.querySelectorAll(
      ".nav-item"
    );


  navItems.forEach(
    item =>
      item.classList.remove(
        "active"
      )
  );


  if (type === "home") {

    navItems[0]?.classList.add(
      "active"
    );

  }


  if (type === "search") {

    navItems[1]?.classList.add(
      "active"
    );

  }


  if (type === "favorites") {

    navItems[2]?.classList.add(
      "active"
    );

  }

}


/* =========================================================
   THEME
========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "light"
  );


  const theme =
    document.body.classList.contains(
      "light"
    )
      ? "light"
      : "dark";


  localStorage.setItem(
    STORAGE.theme,
    theme
  );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  let toast =
    document.getElementById(
      "midnightToast"
    );


  if (!toast) {

    toast =
      document.createElement(
        "div"
      );


    toast.id =
      "midnightToast";


    toast.style.cssText = `
      position: fixed;
      left: 50%;
      bottom: 90px;
      transform: translateX(-50%) translateY(15px);
      z-index: 9999;
      padding: 11px 16px;
      border-radius: 12px;
      background: rgba(20,20,28,.94);
      color: #fff;
      border: 1px solid rgba(255,255,255,.1);
      box-shadow: 0 15px 40px rgba(0,0,0,.35);
      backdrop-filter: blur(15px);
      font: 500 12px Inter, sans-serif;
      opacity: 0;
      pointer-events: none;
      transition: .25s ease;
      max-width: min(90vw, 500px);
      text-align: center;
    `;


    document.body.appendChild(
      toast
    );

  }


  toast.textContent =
    message;


  requestAnimationFrame(
    () => {

      toast.style.opacity =
        "1";

      toast.style.transform =
        "translateX(-50%) translateY(0)";

    }
  );


  clearTimeout(
    toast._timer
  );


  toast._timer =
    setTimeout(
      () => {

        toast.style.opacity =
          "0";

        toast.style.transform =
          "translateX(-50%) translateY(15px)";

      },
      3000
    );

}


/* =========================================================
   FORMAT TIME
========================================================= */

function formatTime(seconds) {

  seconds =
    Math.max(
      0,
      Math.floor(
        Number(seconds) || 0
      )
    );


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remaining =
    seconds % 60;


  return `${minutes}:${String(
    remaining
  ).padStart(2, "0")}`;

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    String(value ?? "");


  return div.innerHTML;

}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeApp() {

  /*
   * Restore theme.
   */

  if (
    localStorage.getItem(
      STORAGE.theme
    ) === "light"
  ) {

    document.body.classList.add(
      "light"
    );

  }


  /*
   * Make a fresh initial queue.
   */

  currentQueue =
    [...songs];


  /*
   * Restore saved song.
   */

  const savedId =
    localStorage.getItem(
      STORAGE.currentSong
    );


  if (savedId) {

    const index =
      songs.findIndex(
        song =>
          song.id === savedId
      );


    if (index >= 0) {

      currentIndex =
        index;

    }

  }


  syncQueueIndex();

  renderSongs();

  updateInterface();

  updateVolumeUI();

  updateRepeatButton();

  updatePlayButton();


  /*
   * Progress timer.
   */

  setInterval(
    updateProgress,
    500
  );


  /*
   * Close mobile sidebar
   * when clicking outside it.
   */

  document.addEventListener(
    "click",
    event => {

      const sidebar =
        document.querySelector(
          ".sidebar"
        );


      const menu =
        document.querySelector(
          ".mobile-menu"
        );


      if (
        !sidebar ||
        !sidebar.classList.contains(
          "open"
        )
      ) {

        return;

      }


      if (
        sidebar.contains(
          event.target
        ) ||
        menu?.contains(
          event.target
        )
      ) {

        return;

      }


      closeSidebar();

    }
  );


  /*
   * Save player position
   * before leaving.
   */

  window.addEventListener(
    "beforeunload",
    saveCurrentSong
  );

}


/* =========================================================
   DOM READY
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );

} else {

  initializeApp();

}
:::
