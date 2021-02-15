const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
