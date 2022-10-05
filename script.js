const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const desktop_menu = document.querySelector(".top-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  desktop_menu.classList.toggle("is-active");
});

function readMoreHtml() {
  let element = document.getElementById("moreHtml");
  element.classList.toggle("show");
}

function readMoreCss() {
  let element = document.getElementById("moreCss");
  element.classList.toggle("show");
}

function readMoreJs() {
  let element = document.getElementById("moreJs");
  element.classList.toggle("show");
}
