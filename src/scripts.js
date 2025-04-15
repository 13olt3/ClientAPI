export function customValidity() {
  const testInput = document.querySelector("#testInput");

  if (testInput.validity.tooShort) {
    testInput.setCustomValidity("Please enter at least 10 characters.");
    testInput.reportValidity();
  } else {
    testInput.setCustomValidity("");
    testInput.reportValidity();
  }
}

export function buttonFunctionality() {
  const button = document.querySelector(".submitButton");
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
