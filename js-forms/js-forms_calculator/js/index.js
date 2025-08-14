console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  // --v-- write your code here --v--
  console.log(event.target.elements.numberA.value);

  let numberA = Number(event.target.elements.numberA.value);
  let numberB = Number(event.target.elements.numberB.value);

  if (event.target.elements.operator.value === "addition") {
    result = add(numberA, numberB);
  } else if (event.target.elements.operator.value === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (event.target.elements.operator.value === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (event.target.elements.operator.value === "division") {
    result = divide(numberA, numberB);
  }
  event.target.reset();
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
