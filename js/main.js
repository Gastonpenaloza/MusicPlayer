const songList = [
  {
    title: "My Cosmos is Mine",
    file: "MyCosmosisMine.mp3",
    cover: "MyCosmosisMine.jpg",
  },
  {
    title: "Wagging Tongue",
    file: "WaggingTongue.mp3",
    cover: "WaggingTongue.jpg",
  },
  {
    title: "Ghosts Again",
    file: "GhostsAgain.mp3",
    cover: "GhostsAgain.jpg",
  },
  {
    title: "Don't Say You Love Me",
    file: "DontSayYouLoveMe.mp3",
    cover: "DontSayYouLoveMe.jpg",
  },
  {
    title: "My Favourite Stranger",
    file: "MyFavouriteStranger.mp3",
    cover: "MyFavouriteStranger.jpg",
  },
  {
    title: "Soul With Me",
    file: "SoulWithMe.mp3",
    cover: "SoulWithMe.jpg",
  },
  {
    title: "Caroline's Monkey",
    file: "CarolinesMonkey.mp3",
    cover: "CarolinesMonkey.jpg",
  },
  {
    title: "Before We Drown",
    file: "BeforeWeDrown.mp3",
    cover: "BeforeWeDrown.jpg",
  },
  {
    title: "People Are Good",
    file: "PeopleAreGood.mp3",
    cover: "PeopleAreGood.jpg",
  },
  {
    title: "Always You",
    file: "AlwaysYou.mp3",
    cover: "AlwaysYou.jpg",
  },
  {
    title: "Never Let Me Go",
    file: "NeverLetMeGo.mp3",
    cover: "NeverLetMeGo.jpg",
  },
  {
    title: "Speak to Me",
    file: "SpeaktoMe.mp3",
    cover: "SpeaktoMe.jpg",
  },
];

// Actual song

let actualSong = null;

// Capture elements of the DOM to work with JS

const songs = document.getElementById("songs");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Hear clicks on controls

play.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prev.addEventListener("click", () => prevSong());
next.addEventListener("click", () => nextSong());

// Load song and show list

function loadSongs() {
  songList.forEach((song, index) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = song.title;
    link.href = "#";
    link.addEventListener("click", () => loadSong(index));
    li.appendChild(link);
    songs.appendChild(li);
  });
}

// Load selected song

function loadSong(songIndex) {
  if (songIndex !== actualSong) {
    changeActiveClass(actualSong, songIndex);
    actualSong = songIndex;
    audio.src = "./audio/" + songList[songIndex].file;
    playSong();
    cover.src = "./img/" + songList[songIndex].cover;
    title.innerText = songList[songIndex].title;
    updateControls();
  }
}

// Change controls

function updateControls() {
  if (audio.paused) {
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
  }
}

// Play Song

function playSong() {
  if (actualSong !== null) {
    audio.play();
    updateControls();
  }
}

// Pause Song

function pauseSong() {
  audio.pause();
  updateControls();
}

// Prev Song

function prevSong() {
  loadSong(actualSong - 1);
}

// Next Song

function nextSong() {
  loadSong(actualSong + 1);
}

// Change active class

function changeActiveClass(lastIndex, newIndex) {
  const links = document.querySelectorAll("a");
  if (lastIndex !== null) {
    links[lastIndex].classList.remove("active");
  }
  links[newIndex].classList.add("active");
}

// GO

loadSongs();
