const $ceInput = document.getElementById("c-input");
const $faInput = document.getElementById("f-input");
const $keInput = document.getElementById("k-input");

let cel, far, kel;

function temChange(e) {
  switch (e.target.name) {
    case "celcius":
      cel = e.target.value;
      far = ((parseInt(e.target.value)) * 1.8 + 32).toFixed(1);
      kel = ((parseInt(e.target.value)) + 273.15).toFixed(1);
      break;

    case "fahrenheit":
      far = e.target.value;
      cel = ((parseInt(e.target.value) - 32) * (5/9)).toFixed(1);
      kel = ((parseInt(e.target.value) - 32) / 1.8 + 273.15). toFixed(1);
      break;
    
    case "kelvin":
      kel = e.target.value;
      cel = ((parseInt(e.target.value) - 273.15)).toFixed(1);
      far = ((9/5) * (parseInt(e.target.value) - 273.15) + 32).toFixed(1);
      break;

    default:
      break;
  }

  $ceInput.value = cel;
  $faInput.value = far;
  $keInput.value = kel;
}

$ceInput.addEventListener("change", (e) =>{
  temChange(e);
});

$faInput.addEventListener("change", (e) =>{
  temChange(e);
});

$keInput.addEventListener("change", (e) =>{
  temChange(e);
});