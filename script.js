

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play");
    const soundList = document.getElementById("soundList");
    const audioPlayer = document.getElementById("audioPlayer");

    playButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents immediate closing
        soundList.classList.toggle("hidden");
    });

    window.playSound = (src) => {
        audioPlayer.src = src;
        audioPlayer.src = true;
        audioPlayer.play();
    };
    window.stopSound = () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    };

    document.addEventListener("click", (event) => {
        if (!playButton.contains(event.target) && !soundList.contains(event.target)) {
            soundList.classList.add("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fullScreenButton = document.getElementById("fullScreen");

    fullScreenButton.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err)=>{
                console.log(`Error attempting to enable full-screen mode: ${err.message}`);
                        });
        } else {
            document.exitFullscreen();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.getElementById("time");
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");
    const timeInput = document.getElementById("timeInput");

    let countdown;
    let totalTime=30 *60;

    function updateTime(){
        const hours = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600)/60);
        const seconds = totalTime % 60;
        timeDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    function startTimer(){
        if (!countdown){
        countdown = setInterval(() => {
            if(totalTime > 0){
            totalTime--;
            updateTime();
            }
            else{
                clearInterval(countdown);
                countdown=null;

            }
        }, 1000);
    }
}
function stopTimer() {
    clearInterval(countdown);
    countdown = null;
}

function resetTimer() {
    stopTimer();
    let userMinutes = parseInt(timeInput.value,10) || 30; // Get user input, default to 30
    totalTime = userMinutes * 60;
    updateTime();
}

// Event Listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize Timer Display
updateTime();

});
function updateLiveClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("liveClock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateLiveClock, 1000);

updateLiveClock();
