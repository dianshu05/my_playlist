/* =========================================================
   MIDNIGHT RADIO
   YouTube Music Player
========================================================= */


/* =========================================================
   SONG DATABASE

   IMPORTANT:
   "id" is the YouTube video ID.

   Example:
   https://www.youtube.com/watch?v=GCdwKhTtNNw

   ID = GCdwKhTtNNw
========================================================= */

let songs = [

    {
        title: "1 A.M Study Session 📚",
        artist: "Lofi Girl",
        id: "lTRiuFIWV54",
        duration: "1:01:14",
        genre: "lofi",
        cover: "https://i.ytimg.com/vi/lTRiuFIWV54/hqdefault.jpg"
    },

    {
        title: "The Less I Know The Better",
        artist: "Tame Impala",
        id: "2SUwOgmvzK4",
        duration: "3:36",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/2SUwOgmvzK4/hqdefault.jpg"
    },

    {
        title: "Dracula",
        artist: "Tame Impala",
        id: "xnP7qKxwzjg",
        duration: "3:54",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/xnP7qKxwzjg/hqdefault.jpg"
    },

    {
        title: "Loser",
        artist: "Tame Impala",
        id: "",
        search: "Tame Impala Loser Official Video",
        duration: "4:28",
        genre: "indie"
    },

    {
        title: "Borderline",
        artist: "Tame Impala",
        id: "2g5xkLqIElU",
        duration: "3:58",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/2g5xkLqIElU/hqdefault.jpg"
    },

    {
        title: "New Person, Same Old Mistakes",
        artist: "Tame Impala",
        id: "_9bw_VtMUGA",
        duration: "6:05",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/_9bw_VtMUGA/hqdefault.jpg"
    },

    {
        title: "Sweater Weather",
        artist: "The Neighbourhood",
        id: "GCdwKhTtNNw",
        duration: "4:13",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/GCdwKhTtNNw/hqdefault.jpg"
    },

    {
        title: "Do I Wanna Know?",
        artist: "Arctic Monkeys",
        id: "bpOSxM0rNPM",
        duration: "4:26",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/bpOSxM0rNPM/hqdefault.jpg"
    },

    {
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        id: "nyuo9-OjNNg",
        duration: "3:04",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/nyuo9-OjNNg/hqdefault.jpg"
    },

    {
        title: "505",
        artist: "Arctic Monkeys",
        id: "qU9mHegkTc4",
        duration: "4:14",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/qU9mHegkTc4/hqdefault.jpg"
    },

    {
        title: "We Are The People",
        artist: "Empire Of The Sun",
        id: "hN5X4kGhAtU",
        duration: "5:12",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/hN5X4kGhAtU/hqdefault.jpg"
    },

    {
        title: "Let It Happen",
        artist: "Tame Impala",
        id: "-edv8OOdZVk",
        duration: "7:51",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/-edv8OOdZVk/hqdefault.jpg"
    },

    {
        title: "As It Was",
        artist: "Harry Styles",
        id: "H5v3kku4y6Q",
        duration: "2:46",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg"
    },

    {
        title: "Bad Habit",
        artist: "Steve Lacy",
        id: "VF-FGf_ZZiI",
        duration: "3:51",
        genre: "indie",
        cover: "https://i.ytimg.com/vi/VF-FGf_ZZiI/hqdefault.jpg"
    },

    {
        title: "Babydoll",
        artist: "Dominic Fike",
        id: "",
        search: "Dominic Fike Babydoll Official Audio",
        duration: "1:40",
        genre: "indie"
    },


    /* ================================================
       KAINBEATS / LOFI

       These use YouTube search until you put in the
       exact video ID from your preferred upload.
    ================================================ */

    {
        title: "With You",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats With You Sleepy Lofi Music",
        duration: "5:14",
        genre: "lofi"
    },

    {
        title: "She Loved to Watch the Rain",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats She Loved to Watch the Rain Sleepy Lofi",
        duration: "5:23",
        genre: "lofi"
    },

    {
        title: "Cinon",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats Cinon Sleepy Lofi",
        duration: "5:20",
        genre: "lofi"
    },

    {
        title: "eucalyptus",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats eucalyptus Sleepy Lofi Music",
        duration: "4:38",
        genre: "lofi"
    },

    {
        title: "Thunder & Thoughts",
        artist: "Lofi Beat Study",
        id: "",
        search: "Thunder & Thoughts Lofi Beat Study",
        duration: "3:50",
        genre: "lofi"
    },

    {
        title: "Rainforest",
        artist: "Saib",
        id: "",
        search: "Saib Rainforest",
        duration: "5:24",
        genre: "lofi"
    },

    {
        title: "Sunken Stasis",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats Sunken Stasis Chill Lofi HipHop",
        duration: "4:57",
        genre: "lofi"
    },

    {
        title: "Dreamwisp",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats Dreamwisp Sleepy Lofi Music",
        duration: "5:16",
        genre: "lofi"
    },

    {
        title: "Evanescía",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats Evanescía Sleepy Lofi Music",
        duration: "5:17",
        genre: "lofi"
    },

    {
        title: "moths to a flame",
        artist: "Kainbeats",
        id: "",
        search: "Kainbeats moths to a flame Sleepy Lofi Music",
        duration: "5:29",
        genre: "lofi"
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let currentIndex = 0;
let player = null;
let isReady = false;

let filteredSongs = [...songs];

let favorites =
    JSON.parse(localStorage.getItem("midnightFavorites")) || [];


/* =========================================================
   YOUTUBE API
========================================================= */

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtube-player", {

        height: "100%",
        width: "100%",

        videoId: songs[0].id || "",

        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1
        },

        events: {

            onReady: function () {
                isReady = true;
            },

            onStateChange: function (event) {

                if (
                    event.data === YT.PlayerState.ENDED
                ) {
                    nextSong();
                }

                updatePlayButton();
            }
        }
    });
}


/* =========================================================
   RENDER SONGS
========================================================= */

function renderSongs(list = filteredSongs) {

    const container =
        document.getElementById("songList");

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

        const isFavorite =
            favorites.includes(song.id || song.title);

        const isPlaying =
            realIndex === currentIndex;


        const div =
            document.createElement("div");

        div.className =
            `song ${isPlaying ? "playing" : ""}`;


        let coverHTML;

        if (song.cover) {

            coverHTML = `
                <img
                    src="${song.cover}"
                    alt=""
                    loading="lazy"
                >
            `;

        } else {

            coverHTML = `♫`;

        }


        div.innerHTML = `

            <div class="song-number">
                ${isPlaying ? "♪" : String(index + 1).padStart(2, "0")}
            </div>

            <div class="cover">
                ${coverHTML}
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
                class="song-favorite ${isFavorite ? "favorite" : ""}"
                onclick="favoriteClick(event, ${realIndex})"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>
        `;


        div.addEventListener("click", function () {

            playSong(realIndex);

        });


        container.appendChild(div);

    });

}


/* =========================================================
   PLAY SONG
========================================================= */

function playSong(index) {

    currentIndex = index;

    const song = songs[currentIndex];

    if (!song) return;


    /*

       If we don't have the exact ID, open YouTube search.

       This is useful for Kainbeats songs where YouTube
       has multiple uploads.

    */

    if (!song.id) {

        const query =
            song.search ||
            `${song.artist} ${song.title}`;

        window.open(
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(query),
            "_blank"
        );

        updateInterface();

        return;
    }


    if (!player || !isReady) {

        updateInterface();

        return;
    }


    player.loadVideoById(song.id);

    player.playVideo();

    updateInterface();

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

        playSong(currentIndex);

        return;
    }


    const state =
        player.getPlayerState();


    if (
        state === YT.PlayerState.PLAYING
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
        state === YT.PlayerState.PLAYING;


    const button =
        document.getElementById("playButton");

    const mobile =
        document.getElementById("mobilePlay");


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
   NEXT
========================================================= */

function nextSong() {

    currentIndex++;

    if (currentIndex >= songs.length) {

        currentIndex = 0;

    }

    playSong(currentIndex);

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousSong() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            songs.length - 1;

    }

    playSong(currentIndex);

}


/* =========================================================
   UPDATE UI
========================================================= */

function updateInterface() {

    const song =
        songs[currentIndex];

    if (!song) return;


    document.getElementById(
        "playingTitle"
    ).textContent = song.title;


    document.getElementById(
        "playingArtist"
    ).textContent = song.artist;


    document.getElementById(
        "mobileTitle"
    ).textContent = song.title;


    document.getElementById(
        "mobileArtist"
    ).textContent = song.artist;


    const mobileCover =
        document.getElementById("mobileCover");


    if (song.cover) {

        mobileCover.innerHTML = `
            <img
                src="${song.cover}"
                style="
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    border-radius:8px;
                "
            >
        `;

    } else {

        mobileCover.textContent = "♫";

    }


    const currentFav =
        document.getElementById(
            "currentFavorite"
        );


    const key =
        song.id || song.title;


    if (favorites.includes(key)) {

        currentFav.textContent = "♥";

        currentFav.classList.add("favorite");

    } else {

        currentFav.textContent = "♡";

        currentFav.classList.remove("favorite");

    }


    renderSongs(filteredSongs);

}


/* =========================================================
   FAVORITES
========================================================= */

function favoriteClick(event, index) {

    event.stopPropagation();

    toggleFavorite(index);

}


function toggleFavorite(index) {

    const song = songs[index];

    const key =
        song.id || song.title;


    if (favorites.includes(key)) {

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
        ).value
        .toLowerCase()
        .trim();


    if (!input) {

        filteredSongs = [...songs];

    } else {

        filteredSongs =
            songs.filter(song =>

                song.title
                    .toLowerCase()
                    .includes(input)

                ||

                song.artist
                    .toLowerCase()
                    .includes(input)

            );

    }


    renderSongs(filteredSongs);

}


/* =========================================================
   MOOD FILTER
========================================================= */

function filterMood(mood) {

    if (mood === "all") {

        filteredSongs = [...songs];

    } else {

        filteredSongs =
            songs.filter(
                song => song.genre === mood
            );

    }

    renderSongs(filteredSongs);

}


/* =========================================================
   SHUFFLE
========================================================= */

function shufflePlaylist() {

    filteredSongs =
        [...songs].sort(
            () => Math.random() - 0.5
        );

    renderSongs(filteredSongs);

    playSong(
        songs.indexOf(
            filteredSongs[0]
        )
    );

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    document
        .querySelector(".sidebar")
        .classList.toggle("open");

}


/* =========================================================
   SEARCH FOCUS
========================================================= */

function focusSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

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
        document.body.classList.contains("light")
            ? "light"
            : "dark"
    );

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

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

    document.body.classList.add("light");

}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderSongs();

updateInterface();
