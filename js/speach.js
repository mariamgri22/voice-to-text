const recognition = new (window.SpeechRecognition || webkitSpeechRecognition)();
recognition.continuous = true;

const speechButton = document.getElementById("speechButton");
let isAudioPlaying = false;

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  console.log("Result:", result);
  fetchDataWithLoader(result);
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
