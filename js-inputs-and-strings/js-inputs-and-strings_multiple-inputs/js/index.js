// Task 1: Copy

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

// --v-- Write your code here --v--

copyButton.addEventListener("click", () => {
  secondCopyInput.value = firstCopyInput.value;
});

// --^-- End of Task 1 --^--

// Task 2: Copy and Uppercase

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

// --v-- Write your code here --v--

copyInUppercaseButton.addEventListener("click", () => {
  secondCopyInUppercaseInput.value =
    firstCopyInUppercaseInput.value.toUpperCase();
});

// --^-- End of Task 2 --^--

// Task 3: Switch Values

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);

// --v-- Write your code here --v--

switchValueButton.addEventListener("click", () => {
  /*
  const first = firstSwitchValueInput.value;
  const second = secondSwitchValueInput.value;
  secondSwitchValueInput.value = first;
  firstSwitchValueInput.value = second;
  // ^ why does this work */

  let temp = firstSwitchValueInput.value; // preserve the value
  firstSwitchValueInput.value = secondSwitchValueInput.value;
  secondSwitchValueInput.value = temp;
  // ^ most efficient way, one less variable created

  //first = secondSwitchValueInput.value;
  //second = firstSwitchValueInput.value;
  // ^ but this doesnt?

  //firstSwitchValueInput.value = secondSwitchValueInput.value;
  //secondSwitchValueInput.value = firstSwitchValueInput.value;
  // ^ or this?
});

// --^-- End of Task 3 --^--
