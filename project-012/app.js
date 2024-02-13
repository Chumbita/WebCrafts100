const $btnToggle = document.querySelectorAll(".btn");
const $login = document.querySelector(".login-container");
const $register = document.querySelector(".register-container");
const $about = document.querySelector(".about-container");

console.log($btnToggle)

$btnToggle.forEach(btn  => {
    btn.addEventListener("click", () => {
        $login.classList.toggle("toggle");
        $register.classList.toggle("toggle");
        $about.classList.toggle("toggle");
    })
})
