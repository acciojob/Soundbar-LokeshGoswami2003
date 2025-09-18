// List of sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = sound.charAt(0).toUpperCase() + sound.slice(1);
  button.addEventListener("click", () => {
    // Stop any current audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new audio
    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(button);
});

// Create Stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.textContent = "Stop";
stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
buttonsContainer.appendChild(stopButton);
