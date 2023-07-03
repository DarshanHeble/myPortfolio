
let circularProgresshtml = document.querySelector(".html"), //html 
    progressValuehtml = document.querySelector(".progressvaluehtml");

let progressStartValue = 0,
    speed = 100;

let progressEndValuehtml = 90;

let progresshtml = setInterval(() => {
    progressStartValue++;

    progressValuehtml.textContent = `${progressStartValue}%`
    circularProgresshtml.style.background = `conic-gradient(rgb(255, 153, 0) ${progressStartValue * 3.6}deg, rgb(241 241 241) 0deg)`;

    if (progressStartValue == progressEndValuehtml) {
        clearInterval(progresshtml);
    }
}, speed);


let circularProgresscss = document.querySelector(".css"), //css
    progressValuecss = document.querySelector(".progressvaluecss");

let progressEndValuecss = 80;

let progresscss = setInterval(() => {
    progressStartValue++;

    progressValuecss.textContent = `${progressStartValue}%`
    circularProgresscss.style.background = `conic-gradient(rgb(255, 153, 0) ${progressStartValue * 3.6}deg, rgb(241 241 241) 0deg)`;

    if (progressStartValue == progressEndValuecss) {
        clearInterval(progresscss);
    }
}, speed);


let circularProgressjs = document.querySelector(".js"), //js
    progressValuejs = document.querySelector(".progressvaluejs");

let progressStartValuejs = 0;
let progressEndValuejs = 0;

let progressjs = setInterval(() => {
    progressStartValuejs++;

    progressValuejs.textContent = `${progressStartValue}%`
    circularProgressjs.style.background = `conic-gradient(rgb(255, 153, 0) ${progressStartValue * 3.6}deg, rgb(241 241 241) 0deg)`;

    if (progressStartValuejs == progressEndValuejs) {
        clearInterval(progressjs);
    }
}, speed);




