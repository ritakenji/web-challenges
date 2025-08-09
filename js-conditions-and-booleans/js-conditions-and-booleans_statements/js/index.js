console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

const message =
  SUPER_SECRET_PASSWORD !== receivedPassword
    ? "Access denied!"
    : "Welcome! You are logged in as Brunhilde1984.";
console.log(message);

//--------------------------------------------------X-----------------------------------------------------------------------------

// Part 2: Even / Odd
const number = 6;
let evenOrOdd = number % 2;

if (evenOrOdd === 0) {
  /* 
    > Question: Why does Prettier correct it to double (()) when in other instances only one set of () is necessary?
    > Answer: Initially I wrote (evenOrOdd = 0) whis is incorrect because I am trying to compare values, not reassign:
        1 - = is to assign a value to a variable,
        2 - == to compare values, < NEVER USE THESE !!!
        3 -=== strict compare value and type. < USE THESE INSTEAD
      And with ´evenOrOdd = 0' Prettier corrected me and put double parenthesis on it so: '((evenOrOdd = 0))', but in other exercises that Gimena made in class (ex: number > 3), only one set of parenthesis was used. Why? Because with == its a simple comparison operation and with = the compiler needs to be told to firstly do that assignment operation before the if condition that follows.
    */
  console.log(number, " is an even number");
} else {
  console.log(number, " is an odd number");
}

/* ******************************************* FLORIAN'S TAKE: ************************************************
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}
*/

//--------------------------------------------------X-----------------------------------------------------------------------------

// Part 3: Hotdogs

/* *********************************      HOW I DID IT INITIALLY:     ************************************************

const numberOfHotdogs = 42;
const justFive = numberOfHotdogs < 5; // >>> justFive will be true or false, written like this makes it a boolean.
const fiveToOneHundred = numberOfHotdogs >= 5 && numberOfHotdogs < 100;
const oneHundredToOneMil = numberOfHotdogs >= 100 && numberOfHotdogs < 1000000;
const oneMil = numberOfHotdogs >= 1000000;
let price;

console.log("justFive: ", justFive); // you'll it printing "true"

if (justFive) {
  price = 2 *numberOfHotdogs; // this  isn't efficient, also because I'm comparing a boolean with a number. Can also write 'if (numberOfHotdogs < 5) {price = 2;}'
} else if (numberOfHotdogs === fiveToOneHundred) {
  price = 1.5 * numberOfHotdogs;
} else if (numberOfHotdogs === oneHundredToOneMil) {
  price = 1 * numberOfHotdogs;
} else if (numberOfHotdogs === oneMil) {
  price = 0.1 * numberOfHotdogs;
} else {
  price = 0;
}

console.log("Price: ", price, "€"); */

/* *********************************      HOW FLORIAN SUGGESTED:     ************************************************ */

const numberOfHotdogs = 9;

let totalPrice;

if (numberOfHotdogs < 5) {
  totalPrice = numberOfHotdogs * 2;
} else if (numberOfHotdogs < 100) {
  totalPrice = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs < 1000000) {
  totalPrice = numberOfHotdogs * 1;
} else {
  totalPrice = numberOfHotdogs * 0.1;
}

const formattedPrice = totalPrice.toFixed(2); // toFixed(2): returns nr as a string with 2 decimal places. So 2.005.toFixed(2) would return "2.00".

console.log(`total price: ${formattedPrice} €`); // This will insert the value of the variable into the string.

//--------------------------------------------------X-----------------------------------------------------------------------------

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn ..." : "Partytime!!!";

console.log(statement);

//--------------------------------------------------X-----------------------------------------------------------------------------

// Part 5: Greeting
const userName = "Archibald";
const coachName = "Gimena";
const greeting = "Hello " + (userName === coachName ? "coach" : userName) + "!";

console.log(greeting);

/* *********************************      HOW FLORIAN SUGGESTED:     ************************************************ 
const name = "Jessica";

const greeting = "Hello " + (name === "Jessica" ? "Coach" : name) + "!";

console.log(greeting);
*/
