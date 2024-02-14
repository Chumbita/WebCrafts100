const $btnToggle = document.querySelectorAll(".btn");
const $login = document.querySelector(".login-container");
const $register = document.querySelector(".register-container");
const $about = document.querySelector(".about-container");
const $inputs = document.querySelectorAll(".inputs")

console.log($btnToggle)

$btnToggle.forEach(btn  => {
    btn.addEventListener("click", () => {
        $about.classList.toggle("toggle");
        $login.classList.toggle("toggle");
        $register.classList.toggle("toggle");
        $inputs.forEach(input => {
            input.value = "";
        })
    })
})
