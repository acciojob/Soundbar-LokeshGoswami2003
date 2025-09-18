//your JS code here. If required.
// List of sounds (use your actual filenames from /sounds folder)
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3"];

// Container for buttons
const buttonsContainer = document.getElementById("buttons");

// Create an Audio object
let currentAudio = null;

// Create a button for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = sound.replace(".mp3", ""); // display name without .mp3

  btn.addEventListener("click", () => {
    // Stop previous sound if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    // Play new sound
    currentAudio = new Audio(`sounds/${sound}`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
