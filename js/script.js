// ---------------------------dark mode start----------------------------
var icon = document.getElementById("moon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "images/moon.png";
  document.body.classList.remove("darkmode");
} else if (localData == "dark") {
  icon.src = "images/sun.png";
  document.body.classList.add("darkmode");
}

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
};
// ---------------------------dark mode end----------------------------

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
  wraper.style.left = "40rem";
});

wraper1.addEventListener("click", function () {
  wraper.style.left = "40rem";
});

// ---------------------------menue bar end----------------------------
// ---------------------------form script start----------------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyxKT3Z3siXDd_G89lY5Keq98n8Gh5sOdRGkqcsBNYpK8OMeqKKth_Uevg_ZKRHvDIMrg/exec";
const form = document.forms["form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

// ---------------------------form script end----------------------------
// ---------------------------  CV start ----------------------------
var cvbtn = document.getElementById("dow-cv");
var cvtimes = document.querySelector(".cv div i");
var cv = document.querySelector(".cv");
cvbtn.addEventListener("click", () => {
  cv.style.display = "flex";
});
cvtimes.addEventListener("click", () => {
  cv.style.display = "none";
});

// ---------------------------  CV end----------------------------
