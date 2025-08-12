console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents GET request showing names+value on link + page from reloading aka losing all data

  const formData = new FormData(event.target); // dedicated object/blueprint
  const data = Object.fromEntries(formData); // JS object: gets all the elements and values from the DOM and turns it into an object to later send to a certain destintation (database for ex)
  console.log(data); // to see ^this^

  console.log(
    `The age-badness-sum of ${event.target.firstName.value} is ${
      event.target.age.value + event.target.badness.value
    }`
  );

  event.target.reset(); //clears all values from input fields after submit

  event.target.firstName.focus(); //focuses on firstName input after submit
});
