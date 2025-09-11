document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu-logo");
  const nav = document.querySelector(".nav-header");

  burger.addEventListener("click", () => {
    nav.classList.toggle("is-active");
  });
});
