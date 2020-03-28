const musicPlayer = document.getElementById("music-player");
const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");
const telegramLink = document.getElementById("telegram-link");

function pause() {
  musicPlayer.classList.remove("play");
  playBtn.classList.remove("img-pause");
  audio.pause();
}

function play() {
  musicPlayer.classList.add("play");
  playBtn.classList.add("img-pause");
  audio.play();
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicPlayer.classList.contains("play");

  if (isPlaying) {
    pause();
  } else {
    play();
  }
});

audio.addEventListener("ended", () => {
  musicPlayer.classList.remove("play");
});

audio.addEventListener("timeupdate", e => {
  const { currentTime } = e.srcElement;
  if (currentTime > 15) {
    telegramLink.classList.add("telegram-active");
  }
});
