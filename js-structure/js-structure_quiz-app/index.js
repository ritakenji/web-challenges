/*
1. refractor each block to different files
2. add export (+default) to each block
3. on index, create new variable to call back to on every block we exported ^
4. add return x on every new block refracted if inside new function
5. add import xxx on each file for wtv outside elements it mentions


*/

// -------------------------- IMPORTS --------------------------

import CardsArray from "../utils/cardarray.js";

import App from "../utils/app.js";

const cardarrayBlock = CardsArray();

// -------------------------- HEADER --------------------------

// -------------------------- SUBMIT EVENT - NEW CARD --------------------------

// -------------------------- FORM --------------------------

// -------------------------- BOOKMARKS --------------------------

// -------------------------- CARDS --------------------------

// -------------------------- CARDLIST --------------------------

// -------------------------- APP --------------------------

const appBlock = App();

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
