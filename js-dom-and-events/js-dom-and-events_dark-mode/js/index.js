console.clear();

/*

- If the `body` has the class "dark", the page displays in dark mode.
- Select all 3 buttons by their `data-js` attribute.
- Add an event listener to each button:
  - The “Switch to Dark Mode” button should add the class "dark" to the `body`.
  - The “Switch to Light Mode” button should remove the class "dark" from the `body`.
  - The “Toggle Mode” button should toggle the "dark" class on the `body`.

*/

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
