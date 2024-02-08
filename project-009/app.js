const $mainScreenText = document.querySelector(".user-input");
const $secondScreenText = document.querySelector(".back-calculation");
const $btns = document.querySelectorAll(".btn");

let resetValues = false;
let operation = false; 
let floatOperation = false

function tieneDecimales(numero) {
  return (numero % 1 !== 0);
}

$btns.forEach(btn => {
  btn.addEventListener("click", (e) => {

    if(btn.textContent === "CE") {
      $mainScreenText.innerHTML = "0";
      operation = false;
      floatOperation = false;
    }

    if (btn.textContent === "C") {
      $mainScreenText.innerHTML = "0";
      $secondScreenText.innerHTML = "";
      resetValues = false;
      operation = false;
      floatOperation = false;
    }

    if (e.target.name === "delete") {
      if ($mainScreenText.innerHTML.length === 1) {
        $mainScreenText.innerHTML = "0";
      }
      else {
        $mainScreenText.innerHTML = $mainScreenText.innerHTML.slice(0, -1);
      }

      if($mainScreenText.innerHTML.includes(",") === false) {
        floatOperation = false;
      }
    }

    if (btn.textContent === "." && !floatOperation){
      floatOperation = true;
      if($mainScreenText.innerHTML === "0" || resetValues == true){
        $mainScreenText.innerHTML = "0."
        resetValues = false;
      }
      else {
        $mainScreenText.innerHTML += btn.textContent;
      }
    }

    if (e.target.name === "number") {
      if (operation == true){
        $mainScreenText.innerHTML = "0";
      }

      if (resetValues) {
        $mainScreenText.innerHTML = "0";
        $secondScreenText.innerHTML = "";
      }
      if ($mainScreenText.innerHTML === "0") {
        $mainScreenText.innerHTML = btn.textContent;
      }
      else {
        $mainScreenText.innerHTML += btn.textContent;
      }
      
      resetValues = false;
      operation = false;
    }

    if (e.target.name === "operation") {
      resetValues = false;
      floatOperation = false;
      $secondScreenText.innerHTML = $mainScreenText.innerHTML + btn.textContent;
      
      operation = true;
    }

    if (btn.textContent === "=") {

      if(floatOperation) {
        let result = eval(parseFloat($secondScreenText.innerHTML) + parseFloat($mainScreenText.innerHTML));

        $secondScreenText.innerHTML = $secondScreenText.innerHTML + $mainScreenText.innerHTML;
        
        $mainScreenText.innerHTML = Number(result.toFixed(7));
        
        floatOperation = false;
        resetValues = true;
      }
      else {
        let result = eval($secondScreenText.innerHTML + $mainScreenText.innerHTML);
        if(tieneDecimales(result)) {
          
          $secondScreenText.innerHTML = $secondScreenText.innerHTML + $mainScreenText.innerHTML;

          $mainScreenText.innerHTML = result.toFixed(7);
          resetValues = true;
        }
        else {
          
          $secondScreenText.innerHTML = $secondScreenText.innerHTML + $mainScreenText.innerHTML;

          $mainScreenText.innerHTML = result;
          resetValues = true;
        }
      }
      
      
    }
  })
});