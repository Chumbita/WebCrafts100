const $infoBtns = document.querySelectorAll(".circle");
const $info = document.querySelector(".hero__info-text");

console.log($infoBtns);

$infoBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.nextSibling.nextSibling)
    e.target.nextSibling.nextSibling.classList.toggle("open");
  })
});

