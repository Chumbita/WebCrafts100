const $infoBtn = document.getElementById("info-btn");
const $info = document.querySelector(".hero__info-text");

$infoBtn.addEventListener("click", (e) =>{
  $info.classList.toggle("open");
  $infoBtn.classList.toggle("open");
})
