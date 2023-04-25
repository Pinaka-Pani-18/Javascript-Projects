const textareaEl = document.querySelector(".textarea");

const textToSpeechBtnEl = document.querySelector(".textToSpeechBtn");

const speakerIconEl = document.querySelector(".speakerIcon");

let speaking = true;


const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textareaEl.value;

  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

    if (synth.speaking && speaking) {
      textToSpeechBtnEl.innerText = "Pause";
      synth.resume();
      speaking = false;
    speakerIconEl.innerHTML = "&#128266;";
    } else {
      textToSpeechBtnEl.innerText = "Resume";
      synth.pause();
      speaking = true;
    speakerIconEl.innerHTML = "&#128264;";
    }

  setInterval(() => {
    if (!synth.speaking && !speaking) {
      speaking = true;
      textToSpeechBtnEl.innerText = "Text to Speech";
    }
  });
};

textToSpeechBtnEl.addEventListener("click", textToSpeech);
