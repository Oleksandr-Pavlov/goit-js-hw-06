// 1 task
const categoriesEl = document.querySelector("#categories");
const numberOfCategoriesEl = categoriesEl.childElementCount;

console.log("Number of categories:", numberOfCategoriesEl);

// 2 task. First element
const firstItemEl = categoriesEl.firstElementChild;
const firstItemTitleEl = firstItemEl.firstElementChild.textContent;
const firstItemNumberOfElementsEl =
  firstItemEl.lastElementChild.childElementCount;

console.log("Category:", firstItemTitleEl);
console.log("Elements:", firstItemNumberOfElementsEl);

// 2 task. Second element
const secondItemEl = categoriesEl.children[1];
const secondItemTitleEl = secondItemEl.firstElementChild.textContent;
const secondItemNumberOfElementsEl =
  secondItemEl.lastElementChild.childElementCount;

console.log("Category:", secondItemTitleEl);
console.log("Elements:", secondItemNumberOfElementsEl);

// 2 task. Third element
const thirdItemEl = categoriesEl.lastElementChild;
const thirdItemTitleEl = thirdItemEl.firstElementChild.textContent;
const thirdItemNumberOfElementsEl =
  thirdItemEl.lastElementChild.childElementCount;

console.log("Category:", thirdItemTitleEl);
console.log("Elements:", thirdItemNumberOfElementsEl);
