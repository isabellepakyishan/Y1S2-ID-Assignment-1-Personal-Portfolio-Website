let nav = document.querySelector("nav");
let dropdown = nav.querySelector(".dropdown");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
  } else {
    nav.classList.add("opened");
  }
});

var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
};
