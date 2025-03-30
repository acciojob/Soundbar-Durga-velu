//your JS code here. If required.




let buttons=document.querySelectorAll(".btn")
let stop=document.querySelector(".stop")
let soundAudio=null

buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        if(soundAudio){
     soundAudio.pause()
     soundAudio.currentTime = 0;

        }
           let soundPath = btn.getAttribute("data-sound");
        soundAudio = new Audio(soundPath);
        soundAudio.play();

    })

  
})


stop.addEventListener("click",()=>{

if(soundAudio){
    soundAudio.pause();
    soundAudio.currentTime=0;
}


})
