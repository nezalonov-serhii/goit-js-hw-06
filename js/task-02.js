const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];

const addItemForIngredients = (ingredients) => {
   return ingredients.map((ingredient) => {
      const itemEl = document.createElement("li");

      itemEl.classList.add("item");
      itemEl.textContent = ingredient;

      return itemEl;
   });
};

const ingredientsEl = document.querySelector("#ingredients");

// const arrItems = addItemForIngredients(ingredients);
// ingredientsEl.append(...arrItems);

ingredientsEl.append(...addItemForIngredients(ingredients));
