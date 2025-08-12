console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

hideTosError(); //hides the error before form is submitted

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  /* ↓↓↓↓ initially I had written !event.target.tosCheckbox.checked, but it was missing the .elements. in between*/
  /* ↓↓↓↓ could also turn this if into a function to call here and on click event, with the exception of alert */

  if (!tosCheckbox.checked) {
    showTosError();
  } else {
    hideTosError();
    alert("Form submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});

tosCheckbox.addEventListener("click", () => {
  if (!tosCheckbox.checked) {
    showTosError();
  } else {
    hideTosError();
  }
});
