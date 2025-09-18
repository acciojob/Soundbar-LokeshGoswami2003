const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");

let currentAudio = null;

// Create an audio element in the DOM (required by Cypress)
const audioElement = document.createElement("audio");
audioElement.setAttribute("id", "player");
document.body.appendChild(audioElement);

// Function to play a sound
function playSound(sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  audioElement.src = `sounds/${sound}.mp3`;
  audioElement.play();
  currentAudio = audioElement;
}

// Create buttons for each sound
sounds.forEach(sound => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = sound.charAt(0).toUpperCase() + sound.slice(1);
  button.addEventListener("click", () => playSound(sound));
  buttonsContainer.appendChild(button);
});

// Stop button
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
