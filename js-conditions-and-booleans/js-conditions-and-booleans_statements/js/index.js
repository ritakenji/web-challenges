console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

const message =
  SUPER_SECRET_PASSWORD !== receivedPassword
    ? "Access denied!"
    : "Welcome! You are logged in as Brunhilde1984.";
console.log(message);

// Part 2: Even / Odd
const number = 6;
let evenOrOdd = number % 2;

if (evenOrOdd == 0) {
  /* 
    > Question: Why does Prettier correct it to double (()) when in other instances only one set of () is necessary?
    > Answer: Initially I wrote (evenOrOdd = 0) whis is incorrect because I am trying to compare values, not reassign:
        1 - = is to assign a value to a variable,
        2 - == to compare values, 
        3 -=== strict compare value and type.
      And with ´evenOrOdd = 0' Prettier corrected me and put double parenthesis on it so: '((evenOrOdd = 0))', but in other exercises that Gimena made in class (ex: number > 3), only one set of parenthesis was used. Why? Because with == its a simple comparison operation and with = the compiler needs to be told to firstly do that assignment operation before the if condition that follows.
    */
  console.log(number, " is an even number");
} else {
  console.log(number, " is an odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
const justFive = numberOfHotdogs > 5; // justFive will be true or false.
const fiveToOneHundred = numberOfHotdogs >= 5 && numberOfHotdogs < 100;
const oneHundredToOneMil = numberOfHotdogs >= 100 && numberOfHotdogs < 1000000;
const oneMil = numberOfHotdogs >= 1000000;
let price;

console.log("justFive: ", justFive);

/////////////////////////////////////
if (numberOfHotdogs > 5) {
  price = 2;
}
//        OR.
if (justFive) {
  price = 2;
}
////////////////////////////////////

if (justFive) {
  price = 2 * numberOfHotdogs;
} else if (numberOfHotdogs == fiveToOneHundred) {
  price = 1.5 * numberOfHotdogs;
} else if (numberOfHotdogs == oneHundredToOneMil) {
  price = 1 * numberOfHotdogs;
} else if (numberOfHotdogs == oneMil) {
  price = 0.1 * numberOfHotdogs;
} else {
  price = 0;
}

console.log("Price: ", price, "€");

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn ..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
