const songList = [
    {
        title: "My Cosmos is Mine",
        file: "MyCosmosisMine.mp3",
        cover: "MyCosmosisMine.jpg"
    },
    {
        title: "Wagging Tongue",
        file: "WaggingTongue.mp3",
        cover: "WaggingTongue.jpg"
    },
    {
        title: "Ghosts Again",
        file: "GhostsAgain.mp3",
        cover: "GhostsAgain.jpg"
    },
    {
        title: "Don't Say You Love Me",
        file: "DontSayYouLoveMe.mp3",
        cover: "DontSayYouLoveMe.jpg"
    },
    {
        title: "My Favourite Stranger",
        file: "MyFavouriteStranger.mp3",
        cover: "MyFavouriteStranger.jpg"
    },
    {
        title: "Soul With Me",
        file: "SoulWithMe.mp3",
        cover: "SoulWithMe.jpg"
    },
    {
        title: "Caroline's Monkey",
        file: "CarolinesMonkey.mp3",
        cover: "CarolinesMonkey.jpg"
    },
    {
        title: "Before We Drown",
        file: "BeforeWeDrown.mp3",
        cover: "BeforeWeDrown.jpg"
    },
    {
        title: "People Are Good",
        file: "PeopleAreGood.mp3",
        cover: "PeopleAreGood.jpg"
    },
    {
        title: "Always You",
        file: "AlwaysYou.mp3",
        cover: "AlwaysYou.jpg"
    },
    {
        title: "Never Let Me Go",
        file: "NeverLetMeGo.mp3",
        cover: "NeverLetMeGo.jpg"
    },
    {
        title: "Speak to Me",
        file: "SpeaktoMe.mp3",
        cover: "SpeaktoMe.jpg"
    }
]

// Capture elements of the DOM to work with JS

const songs = document.getElementById("songs");
const audio = document.getElementById("audio");

// Load song and show list

function loadSongs() {
    songList.forEach((song, index) => { 
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = song.title;
        link.href = "#";
        link.addEventListener("click",() => loadSong(index))
        li.appendChild(link);
        songs.appendChild(li);
    })
};

// Load selected song

function loadSong(songIndex) {
    audio.src = "./audio/" + songList[songIndex].file;
    audio.play();
}

// GO

loadSongs();
