const form = document.querySelector(".login-form");

form.addEventListener("submit", Submit);

function Submit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
else{
  console.log(this.elements);
}
  event.currentTarget.reset();
}
