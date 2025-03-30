//your JS code here. If required.




let buttons=document.querySelectorAll(".btn")
let stop=document.querySelector(".stop")
let soundAudio=document.querySelector("#audioPlayer")

buttons.forEach((button) => {
    button.addEventListener("click", soundPlay);
});

stop.addEventListener("click", soundStop);


function soundStop() {
    soundAudio.pause();
    soundAudio.currentTime = 0;
}


function soundPlay(event) {
    let soundPath = event.target.getAttribute("data-sound");
    soundAudio.src = soundPath;
soundAudio.play()

}
