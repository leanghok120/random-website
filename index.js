const headerEl = document.getElementById("header");
const yesButton = document.getElementById("btn-1");
let num = 125;
let height = 60;

function love() {
  headerEl.textContent = "I love you too!";
  yesButton.style.width = "125px";
  yesButton.style.height = "60px";
}

function increaseSize() {
  headerEl.textContent = "Why? Did you misclick? Try again lil bro";
  yesButton.style.width = `${num * 2}px`;
  yesButton.style.height = `${height * 2}px`;
  num += 50;
  height += 50;
}
