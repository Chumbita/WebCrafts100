const $mainScreenText = document.querySelector(".user-input");
const $secondScreenText = document.querySelector(".back-calculation");
const $btns = document.querySelectorAll(".btn");

$btns.forEach(btn => {
  btn.addEventListener("click", (e) => {

    if(btn.textContent === "C"){
      $mainScreenText.innerHTML = "0";
    }

    if(e.target.name === "delete"){
      if($mainScreenText.innerHTML.length === 1){
        $mainScreenText.innerHTML = "0";
      }
      else {
        $mainScreenText.innerHTML = $mainScreenText.innerHTML.slice(0, -1);
      }
    }

    if(e.target.name === "number") {
      if($mainScreenText.innerHTML === "0"){
        $mainScreenText.innerHTML = btn.textContent;
      }
      else {
        $mainScreenText.innerHTML += btn.textContent;
      }
    }

    if(e.target.name === "operation") {
      $secondScreenText.innerHTML = $mainScreenText.innerHTML + btn.textContent;

      $mainScreenText.innerHTML = "0"
    }
  })
});