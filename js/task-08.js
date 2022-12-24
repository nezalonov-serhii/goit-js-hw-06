const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", createUserObject);

function createUserObject(event) {
   event.preventDefault();
   const userData = {};

   const {
      elements: { email, password },
   } = event.currentTarget;

   if (email.value === "" || password.value === "") {
      return alert("Будь ласка заповніть усі поля");
   } else {
      userData.email = email.value;
      userData.password = password.value;
   }

   console.log(userData);
   event.currentTarget.reset();
}
