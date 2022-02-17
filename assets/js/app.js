const toggle = document.querySelector(".mobile-toggle i");
const toggle_Menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  toggle_Menu.classList.toggle("active");
});
