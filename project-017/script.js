const $nav = document.getElementById("nav");
const $menu = document.getElementById("menu");

$menu.addEventListener("click", (e)=> {
  $nav.classList.toggle("open");
})