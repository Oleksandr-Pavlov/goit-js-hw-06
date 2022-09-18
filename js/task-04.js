const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);

let counterValue = 0;

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
