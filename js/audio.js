const audio = new Audio("./sound/hello.mp3");

const playSound = () => audio instanceof HTMLAudioElement && audio.play();
const stopSound = () => {
  if (audio instanceof HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 0;
  }
};
