const ulEl = document.getElementById("categories");
console.log(`Number of categories: ${ulEl.children.length}`);

const liEl = document.querySelectorAll(".item");
// console.log(liEl);

for (let elem of liEl) {
  let category = elem.firstElementChild.textContent;
  let numberOfElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} Elements: ${numberOfElem}`);
}
