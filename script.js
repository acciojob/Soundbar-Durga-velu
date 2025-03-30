//your JS code here. If required.



// Select buttons and stop button
let buttons = document.querySelectorAll(".btn");
let stopButton = document.querySelector(".stop");
let soundAudio = new Audio(); // Create a single audio element

// Function to play sound
function soundPlay(event) {
    let soundPath = event.target.getAttribute("data-sound");
    soundAudio.src = soundPath; // Set the source
    soundAudio.play(); // Play audio
}

// Function to stop sound
function soundStop() {
    soundAudio.pause();
    soundAudio.currentTime = 0;
}

// Add click event to each button
buttons.forEach((button) => {
    button.addEventListener("click", soundPlay);
});

// Add click event to stop button
stopButton.addEventListener("click", soundStop);
