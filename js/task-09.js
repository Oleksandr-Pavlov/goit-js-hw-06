const body = document.querySelector("body");
const bcg = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  bcg.textContent = body.style.backgroundColor;
}
