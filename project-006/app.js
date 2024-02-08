const $btnN1 = document.getElementById("btn-1");
const $btnN2 = document.getElementById("btn-2");
const $btnN3 = document.getElementById("btn-3");

const $txtStep1 = document.getElementById("step-1");
const $txtStep2 = document.getElementById("step-2");
const $txtStep3 = document.getElementById("step-3");

const $body = document.getElementById("body");
const $section = document.getElementById("section");


function resetButtons() {
    $btnN1.classList.remove("active");
    $btnN2.classList.remove("active");
    $btnN3.classList.remove("active");
}

$btnN1.addEventListener("click", () => {
    $txtStep1.style.display = "block";
    $txtStep2.style.display = "none";
    $txtStep3.style.display = "none";
    $body.style.backgroundColor = "#bc4c4c";
    $section.style.backgroundColor = "#c45c5c";

    resetButtons();
    $btnN1.classList.add("active");
});

$btnN2.addEventListener("click", () => {
    $txtStep1.style.display = "none";
    $txtStep2.style.display = "block";
    $txtStep3.style.display = "none";
    $body.style.backgroundColor = "#3c848c";
    $section.style.backgroundColor = "#509494";

    resetButtons();
    $btnN2.classList.add("active");
});

$btnN3.addEventListener("click", () => {
    $txtStep1.style.display = "none";
    $txtStep2.style.display = "none";
    $txtStep3.style.display = "block";
    $body.style.backgroundColor = "#3c7494";
    $section.style.backgroundColor = "#4c7ca4";

    resetButtons();
    $btnN3.classList.add("active");
});
