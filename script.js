//your JS code here. If required.



let buttons=document.querySelectorAll(".btn")
let stop=document.querySelector(".stop")
let soundAudio=null

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Stop and remove existing audio
        if (soundAudio) {
            soundAudio.pause();
            soundAudio.currentTime = 0;
            soundAudio.remove(); // Remove from DOM
        }

        // Create an audio element in the DOM
        soundAudio = document.createElement("audio");
        soundAudio.src = btn.getAttribute("data-sound");
        soundAudio.id = "dynamic-audio"; // ID for Cypress detection
        document.body.appendChild(soundAudio);

        // Play the audio
        soundAudio.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });


		     });
    });
stop.addEventListener("click",()=>{

if(soundAudio){
    soundAudio.pause();
    soundAudio.currentTime=0;
}


})











