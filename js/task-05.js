const inputEl = document.getElementById("name-input");
const textNemeEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
   if (event.currentTarget.value === "") {
      textNemeEl.textContent = "Anonymous";
   } else {
      textNemeEl.textContent = event.currentTarget.value;
   }

   console.dir(event.currentTarget);
});
