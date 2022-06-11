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
