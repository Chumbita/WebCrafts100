const $btnRock = document.querySelector(".rock-container");
const $btnPaper = document.querySelector(".paper-container");
const $btnScissors = document.querySelector(".scissors-container");
const $personScore = document.getElementById("p-score");
const $computerScore = document.getElementById("c-score");
const $textContainer = document.getElementById("result-text-container");
const $resultText = document.createElement("p");

$textContainer.appendChild($resultText);
$resultText.classList.add("result-text");

let personScore = 0;
let computerScore = 0;

function RPSGame(opcPerson){
    let opcComputer = Math.floor(Math.random() * 3) + 1;
    if(opcPerson === opcComputer){
        $resultText.innerText = "¡Empate!" 
    }
    else if(opcPerson == 1 && opcComputer == 2){
        $resultText.innerText = "¡Perdiste! El papel le gana a la piedra";
        computerScore ++;
        $computerScore.innerText = `${computerScore}`;
    }
    else if(opcPerson == 1 && opcComputer == 3){
        $resultText.innerText = "¡Ganaste! La piedra le gana a tijera";
        personScore ++;
        $personScore.innerText = `${personScore}`;
    }
    else if(opcPerson == 2 && opcComputer == 1){
        $resultText.innerText = "¡Ganaste! El papel le gana a la piedra";
        personScore ++;
        $personScore.innerText = `${personScore}`;
    }
    else if(opcPerson == 2 && opcComputer == 3){
        $resultText.innerText = "¡Perdiste! La tijera le gana al papel";
        computerScore ++;
        $computerScore.innerText = `${computerScore}`;
    } 
    else if(opcPerson == 3 && opcComputer == 1){
        $resultText.innerText = "¡Ganaste! La tijera le gana al papel";
        personScore ++;
        $personScore.innerText = `${personScore}`;
    }
    else if(opcPerson == 3 && opcComputer == 2){
        $resultText.innerText = "¡Perdiste! La piedra le gana a tijera";
        computerScore ++;
        $computerScore.innerText = `${computerScore}`;
    }
}

$btnRock.addEventListener("click", () => {
    RPSGame(1)
});
$btnPaper.addEventListener("click", () => {
    RPSGame(2);
});
$btnScissors.addEventListener("click", () =>{
    RPSGame(3);
});