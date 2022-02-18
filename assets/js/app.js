const toggle = document.querySelector(".mobile-toggle i");
const toggle_Menu = document.querySelector(".nav-menu");

//  Open-Close toggle mobile menu
toggle.addEventListener("click", () => {
  toggle_Menu.classList.toggle("active");
});

// shrink Header when scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
