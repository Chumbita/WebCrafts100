const $nav = document.getElementById("nav");
const $menu = document.getElementById("menu");
const $navItems = document.querySelectorAll(".nav-item");
const $expandContent = document.querySelectorAll(".more-options");
const $expandBtn = document.querySelectorAll(".expand-btn");

function resetActive() {
  $navItems.forEach(nav => {
    nav.classList.remove("active");
  })
}

$menu.addEventListener("click", (e)=> {
  $nav.classList.toggle("open");
});

$navItems.forEach(nav => {
  nav.addEventListener("click", () => {
    resetActive();
    nav.classList.toggle("active");
  });
});

$expandBtn.forEach(btn => {
  btn.addEventListener("click", (e) =>{
    let content = e.target.parentNode.nextElementSibling;
    for (let i = 0; i < $expandContent.length; i++) {
      if(content.classList.contains("open")) {
        continue;
      }
      $expandContent[i].classList.remove("open");
      $expandBtn[i].style.transform = "rotate(0)";
      
    }
    content.classList.toggle("open");
    if(content.classList.contains("open")) {
      e.target.style.transform = "rotate(180deg)";
      return;
    }
    e.target.style.transform = "rotate(0)";
  })
})