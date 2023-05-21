// ---------------------------dark mode start----------------------------
var icon = document.getElementById("moon");

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
};
// ---------------------------dark mode end----------------------------
// ---------------------------typing start----------------------------
// var typed = new typed(".typing", {
//     strings: [" ", "Web Developer", "Programer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     Loop: true
// })
// ---------------------------typing end----------------------------
// ---------------------------Scroll Animation Start----------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElementsX = document.querySelectorAll(".hiddenX");
const hiddenElementsY = document.querySelectorAll(".hiddenY");

hiddenElementsX.forEach((el) => observer.observe(el));
hiddenElementsY.forEach((el) => observer.observe(el));

// ---------------------------Scroll Animation end----------------------------
// ---------------------------Scroll up start----------------------------
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// ---------------------------Scroll up end----------------------------
// ---------------------------menue bar start----------------------------
let bars = document.querySelector(".fa-bars");
let wraper = document.querySelector(".wraper");
let times = document.querySelector(".fa-times");
let wraper1 = document.querySelector(".wraper1");

bars.addEventListener("click", function () {
  wraper.style.left = "0";
});

times.addEventListener("click", function () {
  wraper.style.left = "35rem";
});

wraper1.addEventListener("click", function () {
  wraper.style.left = "35rem";
});

// ---------------------------menue bar end----------------------------
// var discord = document.getElementsByClassName("discord");
// var showID = document.getElementsByClassName("showID");

// discord.addEventListener("click", function () {
//   showID.style.display = "inline";
// });
