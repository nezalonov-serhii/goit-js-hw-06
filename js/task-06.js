const validationInputEl = document.getElementById("validation-input");
const inputLength = +validationInputEl.dataset.length;

validationInputEl.addEventListener("blur", (event) => {
   if (event.currentTarget.value.length === inputLength) {
      validationInputEl.classList.add("valid");
      validationInputEl.classList.remove("invalid");
   } else {
      validationInputEl.classList.add("invalid");
   }
});
