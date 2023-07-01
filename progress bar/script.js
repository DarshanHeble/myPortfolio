let circularProgress = document.querySelector(".circularprobar"),
    progressValue = document.querySelector(".progressvalue");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg, yellow 0deg)`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
