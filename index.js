const countdownDisplay = document.getElementById('countdown-display');
const countdownHours = document.getElementById('countdown-hours');
const countdownMinutes = document.getElementById('countdown-minutes');
const countdownSeconds = document.getElementById('countdown-seconds');

function renderCountdown(targetDate) {
  const today = new Date();
  const targetDateObj = new Date(targetDate);

  const timeDifference = targetDateObj.getTime() - today.getTime();

  const daysUntilTarget = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursUntilTarget = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesUntilTarget = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsUntilTarget = Math.floor((timeDifference % (1000 * 60)) / 1000);

  countdownDisplay.textContent = daysUntilTarget;
  countdownHours.textContent = `Hrs: ${hoursUntilTarget}`;
  countdownMinutes.textContent = `Mins: ${minutesUntilTarget}`;
  countdownSeconds.textContent = `Secs: ${secondsUntilTarget}`;
}

renderCountdown('2023-12-25');
