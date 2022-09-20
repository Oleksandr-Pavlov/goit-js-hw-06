const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
let internalArr = [];

ingredients.forEach((element) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = element;
  ingredientEl.classList.add("item");
  internalArr.push(ingredientEl);
});

ingredientsEl.append(...internalArr);
