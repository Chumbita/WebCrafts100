// const $infoBtns = document.querySelectorAll(".circle");
// const $info = document.querySelector(".hero__info-text");

// console.log($infoBtns);

// $infoBtns.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     console.log(e.target.nextSibling.nextSibling)
//     e.target.nextSibling.nextSibling.classList.toggle("open");
//   })
// });

const $imgs = document.querySelectorAll(".carrusel-img");
const $home = document.querySelector(".home");
const $header = document.getElementById("header");
const $hamburgerMenu = document.querySelector(".menu");
const $HMLines = document.querySelectorAll(".lines");
const $sections = document.querySelectorAll(".nav__links");

$imgs.forEach(img => {
  img.addEventListener("click", (e) => {
    let src = e.target.firstChild.src;
    console.log(src);
    $home.style.backgroundImage = `url(${src})`;
  })
})

window.addEventListener("scroll", () => {
  if(window.scrollY > 0) {
    $header.classList.add("scrolled");
  }
  else {
    $header.classList.remove("scrolled");
  }
})

$hamburgerMenu.addEventListener("click", ()=> {
  $HMLines.forEach(line => {
    line.classList.toggle("open");
  })
  $header.classList.toggle("open");
})

$sections.forEach(section => {
  section.addEventListener("click", (e)=> {
    $header.classList.remove("open");
    $HMLines.forEach(line => {
      line.classList.toggle("open");
    })
  })
})