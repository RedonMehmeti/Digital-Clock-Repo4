const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

const hour3 = document.querySelector('.hour3');
const min3 = document.querySelector('.min3');
const sec3 = document.querySelector('.sec3');

const setClock = () => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotate(${hh + mm / 12}deg)`;
  min.style.transform = `rotate(${mm}deg)`;
  sec.style.transform = `rotate(${ss}deg)`;

  hourHand.style.transform = `rotate(${hh + mm / 12}deg)`;
  minHand.style.transform = `rotate(${mm}deg)`;
  secHand.style.transform = `rotate(${ss}deg)`;

  hour3.style.transform = `rotate(${hh + mm / 12}deg)`;
  min3.style.transform = `rotate(${mm}deg)`;
  sec3.style.transform = `rotate(${ss}deg)`;
};

setInterval(setClock, 1000); // Update the clock every second

setClock(); // Initial call to set the clock immediately
