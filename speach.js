const recognition = new (window.SpeechRecognition || webkitSpeechRecognition)();
recognition.continuous = true;

const audio = new Audio("sound/hello.mp3");
const speechButton = document.getElementById("speechButton");
let isAudioPlaying = false;

const playSound = () => audio instanceof HTMLAudioElement && audio.play();
const stopSound = () => {
  if (audio instanceof HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 0;
  }
};

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  console.log("Result:", result);
};

speechButton.addEventListener("mousedown", () => {
  recognition.start();
  speechButton.classList.add("active");
  isAudioPlaying = true;
  playSound();
});

speechButton.addEventListener("mouseup", () => {
  recognition.stop();
  speechButton.classList.remove("active");
  isAudioPlaying = false;
  stopSound();
});
