const musicPlayer = document.getElementById("music-player");
const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

function pause() {
  musicPlayer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function play() {
  musicPlayer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
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
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
});

audio.addEventListener("timeupdate", e => {
  const { duration, currentTime } = e.srcElement;
  // console.log(duration, "duration", currentTime, "currentTime");
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener("click", function(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  console.log(duration, "(duration");
  console.log(clickX, "(clickX");
  console.log(width, "width");
  audio.currentTime = (clickX / width) * duration;
});
