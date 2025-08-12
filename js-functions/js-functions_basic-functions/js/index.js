console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

const bookTitle = "The Hobbit";
const bookAuthor = "J. R. R. Tolkien";
let bookRating = 4.5;
let copiesSold = 420;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
/*
console.log("Title: ", bookTitle);
console.log("Author: ", bookAuthor);
console.log("Rating: ", bookRating);
console.log("Sales: ", copiesSold);

bookRating = 4.5;
copiesSold = 500;

console.log("Title: ", bookTitle);
console.log("Author: ", bookAuthor);
console.log("Rating: ", bookRating);
console.log("Sales: ", copiesSold);
*/

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(bookTitle, bookAuthor, bookRating, copiesSold) {
  console.log("Title: ", bookTitle);
  console.log("Author: ", bookAuthor);
  console.log("Rating: ", bookRating);
  console.log("Sales: ", copiesSold);
}

logBookData(bookTitle, bookAuthor, bookRating, copiesSold);

copiesSold = 555;

logBookData(bookTitle, bookAuthor, bookRating, copiesSold);

copiesSold = 99999999;
logBookData(bookTitle, bookAuthor, bookRating, copiesSold);

// --^-- write your code here --^--
