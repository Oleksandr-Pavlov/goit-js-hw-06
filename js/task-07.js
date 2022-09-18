const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
console.log(input.attributes);
console.dir(span);

input.addEventListener("mousemove", onClick);

function onClick(evt) {
  span.style.fontSize = `${evt.currentTarget.value}px`;
}
