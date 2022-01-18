//Selectors
let songs = document.querySelectorAll('#song');
let songLi = document.querySelectorAll(".song");
let songLiArray = Array.from(document.querySelectorAll(".song"));
let songName = document.querySelector('.song-name');
let songItems = Array.from(document.getElementsByClassName("songos"));
const audio = document.querySelector("#a");
const masterPlay = document.querySelector(".playOne");
let gif = document.querySelector("#gif");
let clasy = document.querySelectorAll(".songos");


// Song list
//-----------------------------------------------------------------
const songList = [
    {songName: "'Californication'", filePath: "covers/Californication.mp3", coverPath: ""},
    {songName: "'Can't stop'", filePath: "covers/Cant stop.mp3", coverPath: ""},
    {songName: "'Seven Nation Army'", filePath: "covers/Seven Nation Army.mp3", coverPath: ""},
    {songName: "'Alive'", filePath: "covers/Alive.mp3", coverPath: ""},
    {songName: "'Evenflow'", filePath: "covers/Evenflow.mp3", coverPath: ""},
    {songName: "'Last Resort'", filePath: "covers/Last Resort.mp3", coverPath: ""},
    {songName: "'Toxicity'", filePath: "covers/Toxicity.mp3", coverPath: ""},
    {songName: "'Break Stuff'", filePath: "covers/Breakstuff.m4a", coverPath: ""},
    {songName: "'Take A Look Around'", filePath: "covers/Take A Look Around.mp3", coverPath: ""},
    {songName: "'Enter Sandman'", filePath: "covers/Enter Sandman.mp3", coverPath: ""}

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




// const textList = [
//     {song: 1, text1: ""},
//     {song: 2, text2: ""},
//     {song: 3, text3: ""},
//     {song: 4, text4: ""},
//     {song: 5, text5: ""},
//     {song: 6, text6: ""},
//     {song: 7, text7: ""},
//     {song: 8, text8: ""},
//     {song: 9, text9: ""},
//     {song: 10, text10: ""},

// ]

// textList.text1 = ``