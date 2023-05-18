function speakText(text) {
  const speechSynthesis = window.speechSynthesis;

  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  const utter = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utter);
}
