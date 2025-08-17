console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let now = new Date().getHours(); // instead of writing new Date().getHours() a million times just make a variable for it

  if (now >= 6 && now <= 12) {
    return "Good Morning";
  } else if (now >= 13 && now <= 18) {
    return "Good Afternoon";
  } else if (now >= 19 && now <= 22) {
    return "Good Evening";
  } else if (now >= 23 || now <= 5) {
    // ^had && initially but no value can be bigger or equal to 23 AND smaller or equal to 5
    return "Good Night";
  }
}

// !!!!!!!!!!!!!!!!    getDay() returns the day of the week where 0 represents Sunday, Monday 1, Tuesday 2 etc...   !!!!!!!!!!!!!!!!!!!!
function getDayColor() {
  let today = new Date().getDay(); // instead of writing new Date().getDay() a million times just make a variable for it

  if (today === 1) {
    return "darkgray";
  } else if (today >= 2 && today <= 5) {
    return "lightblue";
  } else if (today >= 6 || today <= 0) {
    // ^here also had && at first but again no value can be bigger or equal to 6 AND smaller or equal to 0
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
