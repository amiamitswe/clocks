const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const secondsSymbols = document.querySelector("#secondsSymbols");
const analogHours = document.querySelector("#analogHours");

setInterval(() => {
  const day = new Date();
  const hh = day.getHours() * 30;
  const mm = day.getMinutes() * 6;
  const ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

const generateSecondIcon = () => {
  for (let i = 1; i <= 60; i++) {
    var tag = document.createElement("span");
    tag.classList = "sec";
    tag.style = `--s: ${i}`;
    var text = document.createTextNode("|");
    tag.appendChild(text);

    secondsSymbols.appendChild(tag);
  }

  for (let i = 1; i <= 12; i++) {
    var tag = document.createElement("span");
    var subTag = document.createElement("b");
    tag.classList = "hour";
    tag.style = `--i: ${i}`;

    var text = document.createTextNode(i);
    subTag.appendChild(text);

    tag.appendChild(subTag);

    analogHours.appendChild(tag);
  }
};

// digital clock
setInterval(() => {
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");
  const ampm = document.querySelector("#ampm");

  const digitalClock = new Date();

  let h = digitalClock.getHours();
  let m = digitalClock.getMinutes();
  let s = digitalClock.getSeconds();

  // handle am or pm
  let amPm = h >= 12 ? "PM" : "AM";

  // convert 24 h to 12 h
  if (h > 12) {
    h = h - 12;
  }

  // add o if less then 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = amPm;
});
