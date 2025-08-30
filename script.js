let sutimi = 0;
let secunde = 0;
let minute = 0;
let Interval;
let isRunning = false;

const timeDisplay = document.querySelector("#time");
const butoane = document.querySelector(".butoane");

butoane.addEventListener("click", (e) => {
  const btn = e.target.id;

  if (btn === "start" && !isRunning) {
    isRunning = true;
    Interval = setInterval(() => {
      let m = minute.toString().padStart(2, "0");
      let s = secunde.toString().padStart(2, "0");
      let cs = sutimi.toString().padStart(2, "0");
      timeDisplay.textContent = `${m}:${s}.${cs}`;

      sutimi++;
      if (sutimi >= 100) {
        sutimi = 0;
        secunde++;
      }
      if (secunde >= 60) {
        secunde = 0;
        minute++;
      }
    }, 10);
  }

  if (btn === "stop" && isRunning) {
    clearInterval(Interval);
    isRunning = false;
  }

  if (btn === "erase") {
    clearInterval(Interval);
    sutimi = 0;
    secunde = 0;
    minute = 0;
    isRunning = false;
    timeDisplay.textContent = "00:00.00";
  }
});
