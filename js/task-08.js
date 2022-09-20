const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Please fill all the fields");
  }

  console.log(data);

  evt.currentTarget.reset();
}
