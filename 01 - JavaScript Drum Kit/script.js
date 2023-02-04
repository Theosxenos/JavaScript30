const allkeys = document.querySelectorAll(".key");
const allaudioplayers = document.querySelectorAll("audio");


document.addEventListener("keydown", (e) => {
    playAudio(e.keyCode);
});

allkeys.forEach((key) => {
    key.addEventListener('click', (e)=>{
        playAudio(key.dataset.key);
    });
});

allaudioplayers.forEach((audio) => {
    audio.addEventListener('ended', audioPlayingStopped);
});


function audioPlayingStopped(e)
{
    let currentkey = document.querySelector(`.key[data-key=\"${e.srcElement.dataset.key}\"]`);
    currentkey.classList.remove("playing");
    console.log(e.srcElement.dataset.key);
}

function playAudio(keycode)
{
    let audioplayer = document.querySelector(`audio[data-key="${keycode}"]`);
    let key = document.querySelector(`.key[data-key="${keycode}"]`);
    
    key.classList.add("playing");

    audioplayer.play();
}