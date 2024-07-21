function myFunction() {
    const resetButton = document.getElementsByClassName("reset")[0];
    const playButton = document.getElementsByClassName("play")[0];
    const pauseButton = document.getElementsByClassName("pause")[0];
    const minute = document.getElementsByClassName("min")[0];
    const second = document.getElementsByClassName("sec")[0];
    const msecond = document.getElementsByClassName("msec")[0];

    let isPlay = false;
    let isReset = false;
    let minCounter = 0;
    let min = 0;
    let secCounter = 0;
    let sec = 0;
    let msecCounter = 0;
    let msec = 0;

    const toggleButton = () => {
        resetButton.classList.remove("hidden");
        pauseButton.classList.remove("hidden");
    }

    const play = () => {
        if(!isPlay && !isReset) {
            min = setInterval(() => {
        if(minCounter === 60) {
                minCounter = 0;
            }
            minute.innerHTML = `${++minCounter}`;
        }, 60*1000);
        sec = setInterval(() => {
            if(secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `${++secCounter}`;
        }, 1000);
        msec = setInterval(() => {
            if(msecCounter === 100) {
                msecCounter = 0;
            }
            msecond.innerHTML = `${++msecCounter}`;
        }, 10);
        isPlay =  true;
        isReset =  true;
        }
        toggleButton();
    }
    const pause = () => { 
        clearInterval(min);
        clearInterval(sec);
        clearInterval(msec);
        isPlay =  false;
        isReset =  false;
    }

    const reset = () => {
        resetButton.classList.add("hidden");
        pauseButton.classList.add("hidden");
        isReset = true;
        minCounter = 0;
        secCounter = 0;
        msecCounter = 0;
        minute.innerHTML = '0';
        second.innerHTML = '0';
        msecond.innerHTML = '0';
        pause();
    }

    playButton.addEventListener("click", play);
    resetButton.addEventListener("click", reset);
    pauseButton.addEventListener("click", pause);
}