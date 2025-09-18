// Map of sound names to online URLs
const soundMap = {
  applause: "https://assets.mixkit.co/sfx/download/mixkit-audience-light-applause-354.wav",
  boo: "https://assets.mixkit.co/sfx/download/mixkit-cartoon-boing-716.wav",
  gasp: "https://assets.mixkit.co/sfx/download/mixkit-cartoon-gasp-655.wav",
  tada: "https://assets.mixkit.co/sfx/download/mixkit-winning-chimes-2015.wav",
  victory: "https://assets.mixkit.co/sfx/download/mixkit-game-level-completed-2059.wav",
  wrong: "https://assets.mixkit.co/sfx/download/mixkit-wrong-answer-fail-notification-946.wav"
};

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

// Create hidden <audio> elements and buttons
Object.keys(soundMap).forEach((soundName) => {
  // Create hidden audio element in DOM
  const audioEl = document.createElement("audio");
  audioEl.src = soundMap[soundName];
  audioEl.id = soundName;
  audioEl.preload = "auto"; // helps Cypress detect it
  audioEl.style.display = "none"; // keep hidden
  document.body.appendChild(audioEl);

  // Create button
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = soundName;

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = audioEl;
    currentAudio.play().catch((err) => console.error("Playback error:", err));
  });

  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.textContent = "stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
