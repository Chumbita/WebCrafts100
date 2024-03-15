const $btnLeft = document.querySelector(".btn-left");
const $btnRight = document.querySelector(".btn-right");
const $slider = document.getElementById("slider-1");
const $sliderSection = document.querySelectorAll(".slider-section");

const $autoSlider = document.getElementById("auto-slider");
const $sliders = document.querySelectorAll(".auto-slider-section");

let operation = 0;
let widthImg = 100 / $sliderSection.length;
let sliderCount = 0;

//CARUSEL 1
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

//CARUSEL 2
let slide = 0; 
let slideOperation = 0;
let slideWidth = (100 / $sliders.length);

let intervalID = setInterval(automaticCarusel, 5000);

function automaticCarusel() {
  slide ++;
  if (slide > $sliders.length - 1) {
    slide = 0;
    slideOperation = 0;
    $autoSlider.style.transform = `translateX(${slideOperation})`;
  }
  else {
    slideOperation += slideWidth;
    $autoSlider.style.transform = `translateX(-${slideOperation}%)`;
  }
}


