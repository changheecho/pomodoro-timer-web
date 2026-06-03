const STORAGE_KEY = 'pomodoro_minutes';

window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('timer-minutes');
  const btn = document.querySelector('.btn-confirm');

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) input.value = saved;

  function validate() {
    const v = input.value.trim();
    const n = Number(v);
    btn.disabled = v === '' || n < 1 || n > 60;
  }

  input.addEventListener('input', validate);
  validate();
});

function saveSettings() {
  const input = document.getElementById('timer-minutes');
  const minutes = Number(input.value.trim());
  if (!minutes || minutes < 1 || minutes > 60) return;

  localStorage.setItem(STORAGE_KEY, minutes);
  location.href = 'index.html';
}
