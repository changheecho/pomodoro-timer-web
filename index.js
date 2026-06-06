const STORAGE_KEY = 'pomodoro_minutes';

function getInitialSeconds() {
  return (Number(localStorage.getItem(STORAGE_KEY)) || 25) * 60;
}

let remainingSeconds = getInitialSeconds();
let intervalId = null;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  document.getElementById('timer').textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getInitialSeconds();
  updateDisplay();
}

function updateCurrentTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('current-time').textContent = `${h}:${m}:${s}`;
}

updateDisplay();
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
