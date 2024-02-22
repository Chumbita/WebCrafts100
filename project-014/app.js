const $passwordUI = document.getElementById("password-ui");
const $lpNumber = document.getElementById("length__num");
const $lpRange = document.getElementById("length__rinp");
const $pgButton = document.getElementById("generate-button");
const $checkboxes = document.querySelectorAll(".options__checkbox");
const $uppersCheckbox = document.getElementById("uppers");
const $lowersCheckbox = document.getElementById("lowers");
const $numbersCheckbox = document.getElementById("numbers");
const $simbolsCheckbox = document.getElementById("symbols");
const $clipBoardBtn = document.querySelector(".password__icon");

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '&lt', '&gt', ',', '.', '?', '/', '~'];
$checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length === 0) {
      checkbox.checked = true;
    }
  });
});

$lpNumber.addEventListener("change", (e)=> {
  $lpRange.value = $lpNumber.value;
});

$lpRange.addEventListener("change", (e)=> {
  $lpNumber.value = $lpRange.value;
});

$pgButton.addEventListener("click", (e) => {
  let password = "";
  let i = 0;
  while (i < parseInt($lpNumber.value)) {
    let char = Math.floor(Math.random() * 4) + 1;
    if(char === 1 && $uppersCheckbox.checked) {
      let asciiValue = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      password += String.fromCharCode(asciiValue);
      i++;
    }
    else if(char === 2 && $lowersCheckbox.checked) {
      let asciiValue = Math.floor(Math.random() * (122 - 97 + 1) + 97);
      password += String.fromCharCode(asciiValue);
      i++;
    }
    else if(char === 3 && $numbersCheckbox.checked) {
      let asciiValue = Math.floor(Math.random() * (57 - 48 + 1) + 48);
      password += String.fromCharCode(asciiValue);
      i++;
    }
    else if(char === 4 && $simbolsCheckbox.checked){
      let n = Math.floor(Math.random() * 31);
      password += symbols[n];
      i++;
    }
  }
  $passwordUI.innerHTML = password;
});

$clipBoardBtn.addEventListener("click", (e) => {
  navigator.clipboard.writeText($passwordUI.innerHTML);
})

