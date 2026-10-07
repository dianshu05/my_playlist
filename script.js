/* =========================================================
   MIDNIGHT RADIO
   YouTube Music Player
========================================================= */


/* =========================================================
   YOUR PLAYLIST
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

let currentIndex = 0;
let player = null;
let isReady = false;

let filteredSongs = [...songs];

let favorites =
  JSON.parse(
    localStorage.getItem("midnightFavorites")
  ) || [];


/* =========================================================
   YOUTUBE IFRAME API
========================================================= */

function onYouTubeIframeAPIReady() {

  console.log("YouTube API loaded.");

  const playerElement =
    document.getElementById("youtube-player");

  if (!playerElement) {

    console.error(
      'Missing element: <div id="youtube-player"></div>'
    );

    return;
  }

  player = new YT.Player("youtube-player", {

    width: "100%",
    height: "100%",

    videoId: songs[0].id,

    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      playsinline: 1
    },

    events: {

      onReady: function (event) {

        console.log("YouTube player ready.");

        isReady = true;

        updateInterface();

      },

      onStateChange: function (event) {

        console.log(
          "YouTube state:",
          event.data
        );

        if (
          event.data ===
          YT.PlayerState.ENDED
        ) {

          nextSong();

        }

        updatePlayButton();

      },

      onError: function (event) {

        const errors = {

          2:
            "Invalid YouTube video ID.",

          5:
            "HTML5 player error.",

          100:
            "Video not found, removed, or private.",

          101:
            "The video owner does not allow embedding.",

          150:
            "The video owner does not allow embedding.",

          153:
            "Missing HTTP Referer or API client identification."

        };

        console.error(
          "YouTube player error:",
          event.data
        );

        console.error(
          errors[event.data] ||
          "Unknown YouTube player error."
        );

      },

      onAutoplayBlocked: function () {

        console.warn(
          "YouTube blocked autoplay. User interaction is required."
        );

      }

    }

  });

}


/* =========================================================
   RENDER PLAYLIST
========================================================= */

function renderSongs(list = filteredSongs) {

  const container =
    document.getElementById("songList");

  if (!container) return;

  container.innerHTML = "";


  if (!list.length) {

    container.innerHTML = `
      <div style="
        padding:40px;
        text-align:center;
        color:#777;
      ">
        No songs found.
      </div>
    `;

    return;

  }


  list.forEach((song, index) => {

    const realIndex =
      songs.indexOf(song);

    const key =
      song.id || song.title;

    const isFavorite =
      favorites.includes(key);

    const isPlaying =
      realIndex === currentIndex;


    const div =
      document.createElement("div");


    div.className =
      `song ${isPlaying ? "playing" : ""}`;


    div.innerHTML = `

      <div class="song-number">
        ${
          isPlaying
            ? "♪"
            : String(index + 1).padStart(2, "0")
        }
      </div>

      <div class="cover">

        <img
          src="${song.cover}"
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
        ${song.duration}
      </div>

      <button
        class="song-favorite ${
          isFavorite ? "favorite" : ""
        }"
        data-index="${realIndex}"
        type="button"
        aria-label="Favorite ${escapeHTML(song.title)}"
      >
        ${isFavorite ? "♥" : "♡"}
      </button>

    `;


    div.addEventListener(
      "click",
      function () {

        playSong(realIndex);

      }
    );


    const favoriteButton =
      div.querySelector(
        ".song-favorite"
      );


    favoriteButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        toggleFavorite(realIndex);

      }
    );


    container.appendChild(div);

  });

}


/* =========================================================
   PLAY SONG
========================================================= */

function playSong(index) {

  if (
    index < 0 ||
    index >= songs.length
  ) {

    return;

  }


  currentIndex = index;

  const song =
    songs[currentIndex];


  console.log(
    "Playing:",
    song.title,
    "| YouTube ID:",
    song.id
  );


  updateInterface();


  if (!player || !isReady) {

    console.warn(
      "YouTube player is not ready yet."
    );

    return;

  }


  /*
   * loadVideoById() loads AND plays the video.
   */

  player.loadVideoById(
    song.id
  );

}


/* =========================================================
   PLAY FIRST
========================================================= */

function playFirst() {

  playSong(0);

}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function togglePlay() {

  if (!player || !isReady) {

    console.warn(
      "Player is not ready."
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

  } else {

    player.playVideo();

  }

}


/* =========================================================
   UPDATE PLAY BUTTON
========================================================= */

function updatePlayButton() {

  if (!player || !isReady) return;


  const state =
    player.getPlayerState();


  const playing =
    state ===
    YT.PlayerState.PLAYING;


  const button =
    document.getElementById(
      "playButton"
    );


  const mobile =
    document.getElementById(
      "mobilePlay"
    );


  if (button) {

    button.textContent =
      playing ? "Ⅱ" : "▶";

  }


  if (mobile) {

    mobile.textContent =
      playing ? "Ⅱ" : "▶";

  }

}


/* =========================================================
   NEXT SONG
========================================================= */

function nextSong() {

  currentIndex++;

  if (
    currentIndex >= songs.length
  ) {

    currentIndex = 0;

  }


  playSong(currentIndex);

}


/* =========================================================
   PREVIOUS SONG
========================================================= */

function previousSong() {

  currentIndex--;

  if (
    currentIndex < 0
  ) {

    currentIndex =
      songs.length - 1;

  }


  playSong(currentIndex);

}


/* =========================================================
   UPDATE NOW PLAYING
========================================================= */

function updateInterface() {

  const song =
    songs[currentIndex];


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


  const mobileCover =
    document.getElementById(
      "mobileCover"
    );


  if (mobileCover) {

    mobileCover.innerHTML = `
      <img
        src="${song.cover}"
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


  updateCurrentFavorite();

  renderSongs(filteredSongs);

}


/* =========================================================
   CURRENT FAVORITE
========================================================= */

function updateCurrentFavorite() {

  const button =
    document.getElementById(
      "currentFavorite"
    );


  if (!button) return;


  const song =
    songs[currentIndex];


  if (!song) return;


  const key =
    song.id || song.title;


  const favorite =
    favorites.includes(key);


  button.textContent =
    favorite ? "♥" : "♡";


  button.classList.toggle(
    "favorite",
    favorite
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
    song.id || song.title;


  if (
    favorites.includes(key)
  ) {

    favorites =
      favorites.filter(
        item => item !== key
      );

  } else {

    favorites.push(key);

  }


  localStorage.setItem(
    "midnightFavorites",
    JSON.stringify(favorites)
  );


  updateInterface();

}


function toggleCurrentFavorite() {

  toggleFavorite(currentIndex);

}


function showFavorites() {

  filteredSongs =
    songs.filter(song =>
      favorites.includes(
        song.id || song.title
      )
    );


  renderSongs(filteredSongs);

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

    filteredSongs =
      [...songs];

  } else {

    filteredSongs =
      songs.filter(song =>

        song.title
          .toLowerCase()
          .includes(query)

        ||

        song.artist
          .toLowerCase()
          .includes(query)

        ||

        song.genre
          .toLowerCase()
          .includes(query)

      );

  }


  renderSongs(filteredSongs);

}


/* =========================================================
   MOOD / GENRE FILTER
========================================================= */

function filterMood(mood) {

  if (
    !mood ||
    mood.toLowerCase() === "all"
  ) {

    filteredSongs =
      [...songs];

  } else {

    const searchMood =
      mood.toLowerCase();


    filteredSongs =
      songs.filter(song =>
        song.genre
          .toLowerCase()
          .includes(searchMood)
      );

  }


  renderSongs(filteredSongs);

}


/* =========================================================
   SHUFFLE
========================================================= */

function shufflePlaylist() {

  filteredSongs =
    [...songs];


  for (
    let i = filteredSongs.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );


    [
      filteredSongs[i],
      filteredSongs[j]
    ] =
    [
      filteredSongs[j],
      filteredSongs[i]
    ];

  }


  renderSongs(filteredSongs);


  if (filteredSongs.length) {

    const shuffledSong =
      filteredSongs[0];


    const index =
      songs.indexOf(
        shuffledSong
      );


    playSong(index);

  }

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

  const sidebar =
    document.querySelector(
      ".sidebar"
    );


  if (sidebar) {

    sidebar.classList.toggle(
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

}


/* =========================================================
   THEME
========================================================= */

function toggleTheme() {

  document.body.classList.toggle(
    "light"
  );


  localStorage.setItem(
    "midnightTheme",
    document.body.classList.contains(
      "light"
    )
      ? "light"
      : "dark"
  );

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(text) {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    text;


  return div.innerHTML;

}


/* =========================================================
   LOAD SAVED THEME
========================================================= */

if (
  localStorage.getItem(
    "midnightTheme"
  ) === "light"
) {

  document.body.classList.add(
    "light"
  );

}


/* =========================================================
   INITIAL RENDER
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderSongs();

    updateInterface();

  }
);
