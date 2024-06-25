const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const digitalClock = document.querySelector('.digital-clock');

const setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  updateDigitalClock(day);
};

const updateDigitalClock = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  digitalClock.textContent = strTime;
};

setClock();
setInterval(setClock, 1000);

const switchTheme = (evt) => {
  const switchBtn = evt.target;
  if (switchBtn.textContent.toLowerCase() === "light") {
    switchBtn.textContent = "dark";
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    switchBtn.textContent = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", switchTheme, false);

const showTimeBtn = document.getElementById("show-time-btn");
showTimeBtn.addEventListener("click", () => {
  digitalClock.style.display = digitalClock.style.display === 'none' || digitalClock.style.display === '' ? 'block' : 'none'; // Toggle display
}, false);

let currentTheme = "dark";

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeBtn.textContent = currentTheme;
}