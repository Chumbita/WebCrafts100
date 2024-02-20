const $modal = document.querySelector(".modal");
const $imgModal = document.querySelector(".img-modal")
const $imgs = document.querySelectorAll(".img");
const $imgsConteiner = document.querySelector(".row");
const $closeBtn = document.querySelector(".close-btn");

$imgs.forEach(img => {
  img.addEventListener("click", (e)=> {
    $imgModal.src = e.target.src;
    $modal.classList.add("active");
    $imgsConteiner.classList.add("active");
  })
})

$closeBtn.addEventListener("click", (e)=> {
  $imgModal.src = "";
  $modal.classList.remove("active");
  $imgsConteiner.classList.remove("active");
})