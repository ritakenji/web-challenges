console.clear();

const box = document.querySelector('[data-js="box"]');
const color = document.querySelector('[data-js="input-color"]');
const radius = document.querySelector('[data-js="input-radius"]');
const rotation = document.querySelector('[data-js="input-rotation"]');

color.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${color.value} 50% 50%)`;
});

radius.addEventListener("input", () => {
  box.style.borderRadius = `${radius.value}%`;
});

rotation.addEventListener("input", () => {
  box.style.transform = `rotate(${rotation.value}deg)`;
});
//When the slider control of `inputRotation` is moved, rotate the box. _Hint:_ Use the `transform` CSS property with a `rotate` value in `deg`.
