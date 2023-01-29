const startingMinutes = 3;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  setInterval(updateCountdown, 1000);
  setInterval(() => location.replace('/categories'), 180000);
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}
