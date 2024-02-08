const $iconsBtns = document.querySelectorAll(".i");
const $menu = document.querySelector(".lines-container");
const $sideBar = document.querySelector(".sidebar-container");
const $menuCont = document.querySelector(".menu-container");
const $navegationOpc = document.querySelectorAll(".navegation-opc");
const $pElements = document.querySelectorAll(".p");


function desactivateIcons() {
    $iconsBtns.forEach(icon => {
        if(icon.classList.contains("active")) {
            icon.classList.remove("active");
        }
    });
}

function desactivateText() {
    $pElements.forEach(p => {
        if(p.classList.contains("activate")) {
            p.classList.remove("activate");
        }
    });
}

$menu.addEventListener("click", () => {
    $menu.classList.toggle("open");
    $sideBar.classList.toggle("open");
    $menuCont.classList.toggle("open");
    $navegationOpc.forEach(nav => {
        nav.classList.toggle("open");
    })
    $pElements.forEach(p => {
        p.classList.toggle("open");
    });

    $iconsBtns.forEach(icon => {
        icon.classList.toggle("open");
    })
})

$iconsBtns.forEach(icon => {
    icon.addEventListener("click", (e) => {
        if($menu.classList.contains("open") == true){
            desactivateText();
            icon.nextElementSibling.classList.add("activate");
            console.log("Hola");
            desactivateIcons();
            icon.classList.add("active");
        }

        else {
            desactivateIcons();
            icon.classList.add("active");
        }
        
    })
});
