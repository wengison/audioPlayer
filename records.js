// Selectors
//-----------------------------------------------------------------
let songs = document.querySelectorAll('#song');
let songLi = document.querySelectorAll(".song");
let songLiArray = Array.from(document.querySelectorAll(".song"));
let songName = document.querySelector('.song-name');
let songItems = Array.from(document.getElementsByClassName("songos"));
let audio = document.querySelector("#a");
let masterPlay = document.querySelector(".playOne");
let gif = document.querySelector("#gif");
let clasy = document.querySelectorAll(".songos");
let bandName = document.querySelector(".band-name");

// Song list
//-----------------------------------------------------------------
const songList = [
    {songName: "'The chaos'", filePath: "songs/Good.m4a", coverPath: ""},
    {songName: "'Butterfly'", filePath: "songs/Hero.m4a", coverPath: ""},
    {songName: "'Hey brother'", filePath: "songs/Hey brother.m4a", coverPath: ""},
    {songName: "'Fire ball'", filePath: "songs/Fire ball.m4a", coverPath: ""},
    {songName: "'Goodbye my friends'", filePath: "songs/Metalisimo.m4a", coverPath: ""},
    {songName: "'Infinity war'", filePath: "songs/Metalisimo.m4a", coverPath: ""},
    {songName: "'Asynchronous'", filePath: "songs/Hero.m4a", coverPath: ""},
    {songName: "'True or false'", filePath: "songs/Hero.m4a", coverPath: ""},
    {songName: "'Mr. Light'", filePath: "songs/Hero.m4a", coverPath: ""},
    {songName: "'Peace and love'", filePath: "songs/Good.m4a", coverPath: ""}
];

// Functions
//-----------------------------------------------------------------
masterPlay.addEventListener('click', ()=> {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

Array.from(songItems).forEach((element, ) => {
    element.addEventListener('click', () => {
        masterPlay.innerHTML = '<i id="playB" class="far fa-play-circle"></i>';
        gif.classList.add("playOne");
        for (i=0; i<clasy.length; i++) {
            clasy[i].classList.remove("current-song-number");
        }
        for (i=0; i<songLi.length; i++) {
            songLi[i].classList.remove("song-clicked");
        }

        let cur = element.classList;
        if (cur !== "current-song-number") {
            cur.add("current-song-number");
        } 
        let songNumber = element.innerHTML;
        let songPlaying = false;
        // let thisSong = new Audio(songList[songNumber -1].filePath);
        let innerText;
        innerText = songList[songNumber -1].songName;
        songName.innerHTML = innerText;
        bandName.innerHTML = "Space Horses"
        let src = songList[songNumber -1].filePath;
        audio.src = src;
    });
});

Array.from(songLiArray).forEach((element) => {
    element.addEventListener('click', ()=> {
        //apendChild
        for (i=1; i<=songLi.length; i++) {
            songLi[i-1].classList.remove("song-clicked");
        }
        element.classList.add("song-clicked");
    })
});

audio.addEventListener('play', changeA);
audio.addEventListener('pause', changeB);

function changeA() {
    masterPlay.innerHTML = '<i id="playB" class="far fa-pause-circle"></i>';
    gif.classList.remove("playOne");
    gif.classList.add("stopOne");
}
function changeB() {
    masterPlay.innerHTML = '<i id="playB" class="far fa-play-circle"></i>';
    gif.classList.remove("stopOne");
    gif.classList.add("playOne");
}


