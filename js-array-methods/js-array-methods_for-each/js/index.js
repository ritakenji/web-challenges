const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

/* -----------------------------------TASK 1 ------------------------------*/

colors.forEach((color) => {
  /*  const body = document.querySelector("body"); // i tried 'document.getElementsByTagName('body')' but forgot that i then need to specify [0]
  const div = document.createElement("div");
  div.classList.add("color-box");
  div.style.backgroundColor = color; //first wrote setAttribute("background-color", color); but for styling we use styling
  body.append(div); */
});

/* -----------------------------------TASK 2 ------------------------------*/

function renderColorBox(param) {
  //const body = document.querySelector("body"); -->  i tried 'document.getElementsByTagName('body')' but forgot that i then need to specify [0], then realized I could just do it directly (line 39)
  const div = document.createElement("div");
  div.classList.add("color-box");
  div.style.backgroundColor = param; //first wrote setAttribute("background-color", color); but for styling we use styling
  document.body.append(div);
}

colors.forEach((colorElement) => {
  console.log("-----------------");
  renderColorBox(colorElement);
  console.log("The value: of each instance", colorElement);
});
