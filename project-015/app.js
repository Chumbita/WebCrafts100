const $infoBtns = document.querySelectorAll(".material-symbols-outlined.info-arrow");
const $info = document.querySelector(".hero__info-text");

console.log($infoBtn);

$infoBtn.forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.nextSibling.nextSibling)
    e.target.nextSibling.nextSibling.classList.toggle("open");
  })
});

