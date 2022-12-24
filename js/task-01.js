const categoriesEl = document.querySelectorAll(".item");
const titlesEl = document.querySelectorAll("h2");

console.log(`Number of categories: ${categoriesEl.length}`);

const tekeSubcategory = (titles, categories) => {
   categories.forEach((el, i) => {
      console.log(`Category: ${titles[i].textContent}`);
      console.log(`Elements: ${el.querySelectorAll("li").length}`);
   });
};

tekeSubcategory(titlesEl, categoriesEl);
