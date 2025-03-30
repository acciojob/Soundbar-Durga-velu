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
        soundAudio=new Audio(btn.getAttribute("data-sound"))

        soundAudio.play();
console.log(soundAudio)
    })

  
})


stop.addEventListener("click",()=>{

if(soundAudio){
    soundAudio.pause();
    soundAudio.currentTime=0;
}


})











