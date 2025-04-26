const audioMagic = new Audio("./sound/magicwand.mp3");
const audioDing = new Audio("./sound/ding.mp3");
audioDing.volume = 0.2;
const audioSuccess = new Audio("./sound/success.mp3");
const audioFail = new Audio("./sound/fail.mp3");
const bgm = new Audio("./sound/dreambig.mp3");
bgm.loop = true;
bgm.volume = 0.1;

let bgmStarted = !false;

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();
}
function startBgm() {
    if (!bgmStarted) {
        bgm.play();
        bgmStarted = true;
    }
}
// Settings
function toggleBgm() {
    if (bgm.paused) {
        bgm.play();
        bgmButton.classList.remove("inactive");
    }
    else {
        bgm.pause();
        bgmButton.classList.add("inactive");
    }
}
// Tempory mute to play an important sound effect
function muteBgm() {
    bgm.pause();
}