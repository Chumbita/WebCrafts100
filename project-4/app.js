const $timer = document.getElementById("timer");
const $startButton = document.getElementById("start-button");
const $stopButton = document.getElementById("stop-button");
const $resetButton = document.getElementById("reset-button");

let [minutes, seconds] = [0, 4];
let timeInterval;
let timerStatus = 0;

function updateTime() {
  seconds--;

  if (minutes == 0 && seconds == 0) {
    $timer.innerHTML = "00:00";
    alert("Bloque de estudio terminado.");
    window.clearInterval(timeInterval);
  }
  if (seconds == -1) {
    seconds = 59;
    minutes--;
  }

  const formatedSeconds = timerFormate(seconds);
  const formatedMinutes = timerFormate(minutes);

  $timer.innerHTML = `${formatedMinutes}:${formatedSeconds}`;
}

function timerFormate(time) {
  return time < 10 ? "0" + time : time;
}

$startButton.addEventListener("click", () => {
  if (minutes == 0 && seconds == 0) {
    alert("Debes reiniciar el cronómetro.");
  } else {
    timerStatus = 1;
    $startButton.disabled = true;
    timeInterval = window.setInterval(updateTime, 1000);
  }
});

$stopButton.addEventListener("click", () => {
  if ((timerStatus = 1)) {
    window.clearInterval(timeInterval);
    $startButton.disabled = false;
  }
});

$resetButton.addEventListener("click", () => {
  window.clearInterval(timeInterval);
  $startButton.disabled = false;

  minutes = 24;
  seconds = 60;
  timerStatus = 0;
  $timer.innerHTML = "25:00";
});
