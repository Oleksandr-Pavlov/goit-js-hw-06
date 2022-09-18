const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill all the fields");
  }

  console.log(`email: ${email.value}, password: ${password.value}`);

  evt.currentTarget.reset();
}
