const hamburger = document.querySelector(".hamb");
const navBox = document.querySelector(".nav_box");

hamburger.addEventListener("click", function() {
  navBox.classList.toggle("check");
  hamburger.classList.toggle("click");
})