const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");
const $slider = document.getElementById("slider");
const $sliderSection = document.querySelectorAll(".slider-section");

let operation = 0;
let widthImg = 100 / $sliderSection.length;
let sliderCount = 0;

console.log($sliderSection.length);

$btnRight.addEventListener("click", moveToRight);
$btnLeft.addEventListener("click", moveToLeft);

function moveToRight() {
  if(sliderCount >= $sliderSection.length - 1) {
    operation = 0;
    sliderCount = 0;
    $slider.style.transform = `translate(${operation})`;    
  }
  else {
    sliderCount ++;
    operation += widthImg;
    $slider.style.transform = `translate(-${operation}%)`;
  }
  console.log(operation);
}

function moveToLeft() {
  sliderCount --;
  if (sliderCount < 0) {
    sliderCount = $sliderSection.length - 1; 
    operation = widthImg * ($sliderSection.length -1);
    $slider.style.transform = `translate(-${operation}%)`;
  }
  else {
    operation -= widthImg;
    $slider.style.transform = `translate(-${operation}%)`;
  }
  console.log(operation);
}

