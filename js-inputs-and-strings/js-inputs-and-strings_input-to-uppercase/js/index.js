console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppercase.addEventListener("click", () => {
  // initially wrote just firstInput.value.toUpperCase(); but i need to assign that to smthing (firstInput.value)
  firstInput.value = firstInput.value.toUpperCase();
});
