// document.querySelector(".burger").addEventListener("click", function () {
//   document.querySelector(".nav-links").classList.toggle("nav-active");
//   this.classList.toggle("toggle");
// });

// const burger = document.querySelector(".burger");
// const navLinks = document.querySelector(".nav-links");

// navLinks.addEventListener("click", () => {
//   // navLinks.classList.toggle("block");
//   // navLinks.classList.toggle("hidden");
//   navLinks.classList.toggle("hidden");
//   navLinks.classList.toggle("flex");
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
