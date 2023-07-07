// ---------------------------dark mode start----------------------------
var icon = document.getElementById("moon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}
let localData = localStorage.getItem("theme");

if (localData == "light") {
  icon.src = "moon.png";
  document.body.classList.remove("darkmode");
} else if (localData == "dark") {
  icon.src = "sun.png";
  document.body.classList.add("darkmode");
}

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "moon.png";
    localStorage.setItem("theme", "light");
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
// ---------------------------form script start----------------------------
let form = document.querySelector("form");
// The document.querySelector() method returns the first element that matches a specified CSS selector.
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
  document.querySelector("#sub").value = "Submiting..";
  // Change the value of the submit button to "Submitting..." while the form is being submitted.
  let data = new FormData(form);
  // The FormData() method creates a new FormData object that contains the values of all the form fields.
  fetch('https://script.google.com/macros/s/AKfycbwbTF_cdJPwlVw9DcOancn7FUU83P2etZ1aMOAifZscdvay1Adx06vZuJZC_VQMDUg5/exec', {
    method: "POST",
    body: data
  })
    // The fetch() method is used to make a request to the server and retrieve data.
    // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
    .then(res => res.text())
    // The .then() method is used to handle the response from the server.
    // The response is converted to text using the res.text() method.
    .then(data => {
      document.querySelector("#msg").innerHTML = data;
      // The innerHTML property sets or returns the HTML content of an element.
      // Here, we are setting the content of the <h1> element to the response from the server.
      document.querySelector("#sub").value = "Submit"
      // Change the value of the submit button back to "Submit" after the form has been submitted.
    });
})

// ---------------------------form script end----------------------------