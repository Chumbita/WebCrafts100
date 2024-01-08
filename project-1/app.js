const $inputBillAmount = document.getElementById("bill-amount-input");
const $inputPorcetage = document.getElementById("tip-percentage-input");
const $btnCalculate = document.getElementById("btn-calculate");
const $total = document.getElementById("total");

$btnCalculate.addEventListener("click", () =>{
  let  bill = parseInt ($inputBillAmount.value);
  let porcentage = (parseInt($inputPorcetage.value)/100);
  let res = bill + bill*porcentage;
  if(isNaN(res)){
    alert("Debes ingresar números");
    $inputBillAmount.value = '';
    $inputPorcetage.value = '';
  }
  else{
    $total.innerText = `$${res.toFixed(2)}`;
  }
});