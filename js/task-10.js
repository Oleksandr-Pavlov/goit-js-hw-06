const controls = document.querySelector("#controls");
const input = controls.firstElementChild;
const createBtn = controls.children[1];
const destroyBtn = controls.lastElementChild;
const boxesWrap = controls.nextElementSibling;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(input.value);

  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesWrap.append(box);

    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesWrap.innerHTML = "";
  input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
