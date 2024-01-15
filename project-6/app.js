const $btnN1 = document.getElementById("btn-1");
const $btnN2 = document.getElementById("btn-2");
const $btnN3 = document.getElementById("btn-3");

const $txtStep1 = document.getElementById("step-1");
const $txtStep2 = document.getElementById("step-2");
const $txtStep3 = document.getElementById("step-3");

const $body = document.getElementById("body");
const $section = document.getElementById("section");

$btnN1.addEventListener("click", ()=>{
    $txtStep1.style.display = "block";
    $txtStep2.style.display = "none";
    $txtStep3.style.display = "none";
    $body.style.backgroundColor = "#bc4c4c";
    $section.style.backgroundColor = "#c45c5c";
    $btnN1.style.backgroundColor = "#c45c5c";
    $btnN2.style.backgroundColor = "white";
    $btnN3.style.backgroundColor = "white";
});

$btnN2.addEventListener("click", ()=>{
    $txtStep1.style.display = "none";
    $txtStep2.style.display = "block";
    $txtStep3.style.display = "none";
    $body.style.backgroundColor = "#3c848c";
    $section.style.backgroundColor = "#509494";
    $btnN1.style.backgroundColor = "white";
    $btnN2.style.backgroundColor = "#509494";
    $btnN3.style.backgroundColor = "white";
});

$btnN3.addEventListener("click", ()=>{
    $txtStep1.style.display = "none";
    $txtStep2.style.display = "none";
    $txtStep3.style.display = "block";
    $body.style.backgroundColor = "#3c7494";
    $section.style.backgroundColor = "#4c7ca4";
    $btnN1.style.backgroundColor = "white";
    $btnN2.style.backgroundColor = "white";
    $btnN3.style.backgroundColor = "#4c7ca4";
});