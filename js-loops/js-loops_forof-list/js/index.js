console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (const element of programmingLanguages) {
  const newLi = document.createElement("li");
  newLi.textContent = `${element}`;
  ol.append(newLi);
}

// --^-- write or modify code above this line --^--
