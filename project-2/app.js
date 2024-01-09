const $dateInput = document.getElementById("date-input");
const $btnCalcuAge = document.getElementById("btn-calculate-age");
const $ageResult = document.getElementById("age-result");

function getAge(bithdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(bithdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    if (currentDate.getMonth() > birthdayDate.getMonth() || (currentDate.getMonth() == birthdayDate.getMonth() && currentDate.getDay() >= birthdayDate.getDay())) {
        age ++;
    }
    return age;
}

function calculateAge() {
    let birthdayValue = $dateInput.value;
    if (birthdayValue == ""){
        alert("Debes ingresar una fecha.");
    }
    else {
        let age = getAge(birthdayValue);
        $ageResult.innerHTML = `Tenés ${age} años`;
    }
}

$btnCalcuAge.addEventListener("click", calculateAge);