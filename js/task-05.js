const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onNameEnter);

function onNameEnter(evt) {
  console.dir(evt.currentTarget.value);
  if (evt.currentTarget.value === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = evt.currentTarget.value.trim();
  }
}
