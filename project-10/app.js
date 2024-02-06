const $iconsBtns = document.querySelectorAll(".i")
const $menu = document.querySelector(".lines-container")
console.log($iconsBtns);

function desactivateIcon() {
    $iconsBtns.forEach(icon => {
        if(icon.classList.contains("active")) {
            icon.classList.remove("active");
        }
    });
}

$iconsBtns.forEach(icon => {
    icon.addEventListener("click", (e) => {
        desactivateIcon();
        icon.classList.add("active");
    })
});

$menu.addEventListener("click", () => {
    $menu.classList.toggle("open");
})