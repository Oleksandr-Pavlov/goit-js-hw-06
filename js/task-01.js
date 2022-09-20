const categoriesEl = document.querySelector("#categories");
const list = document.querySelectorAll(".item");
const numberOfCategoriesEl = categoriesEl.childElementCount;

console.log("Number of categories:", numberOfCategoriesEl);

list.forEach((el) => {
  console.log("Category", el.firstElementChild.textContent);
  console.log("Elements", el.lastElementChild.children.length);
});
