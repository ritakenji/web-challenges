console.clear();

// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  // TODO:
  /*
  1. compare values between num1 and num2 using if statement
  2. if num1 is the biggest value:
    2.1. return num1, otherwise:
    2.2. return num2
  3. call function outside with desired arguments
  */
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
  // OR:
  /* return Math.max(num1, num2); */
}
console.log(maxOfTwoNumbers(4, 9));

// -------------------------------------------------------------------------------------------------

// Find the longest word
console.log("-------------------------");

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO:
  /* 
  1. create a variable (longest) to store longest word, initialized as ""
  2. create a loop suitable for arrays that goes through all elements of array 
  3. create index variable to go through all elements of array
  4. check length property of each element
  5. compare length of one element to next one (if) 4 vs 2 (if length1 > length2) if it is bigger then:
    5.1. (only if the condition is met) store/update the longer element in the longest variable and compare its lenght to next element
    5.2. if shorter than the previous stored value, just move on to next element
  6. return longest variable after the loop is over
  7. call function outside and pass words array as argument
  */
  let longest = "";
  if (words.length === 0) {
    console.log("Array is empty!");
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    /* console.log("words[i] ", words[i]); */
    if (words[i].length > longest.length) {
      /* console.log(true); */
      longest = words[i];
      /* console.log("longest variable so far ", longest); */
    }
  }
  return longest;
}
console.log(findLongestWord(words));

// -------------------------------------------------------------------------------------------------

// Calculate the sum
console.log("-------------------------");

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  // TODO:
  /*
  1. create a variable (sum) initialized at 0, to later store the sum of all elements of the array
  2. create a loop, to go through every element of the numbers array
  3. index goes through all elements of the array
  4. store the value of first element on 'sum' variable and add the next element's value to it
  5.return sum
  */

  let sum = 0;
  /*  if (numbers.length === 0) {
    console.log("Array is empty!");
    return 0;
  } */
  for (let i = 0; i < numbers.length; i++) {
    /* console.log(numbers[i]); */
    sum += numbers[i];
    /* console.log(sum); */
  }
  return sum;
}
console.log(sumNumbers(numbers));

// -------------------------------------------------------------------------------------------------

// Calculate the average length of the words
console.log("-------------------------");

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];

function averageWordLength(words) {
  // TODO:
  /*
  I need:
  - average = total letters / nr elements
  - count letters of each element
  - add them all
  - divide them by 2

  1. create variable 'totalWords' --> number of elements in array, initialized as 0
  2. create variable 'countLetters' --> number of letters in array, initialized as 0
  2. create a loop that goes through the array
  3. index each element on the array
  4. use length property on each element (words[i].length)
  5. on each loop, length of an element is added to countLetters (countLetters =+ words[i].length) and
  6. on each loop, we count the elements and add them (totalWords++)
  7. return average (countLetters/totalWords)
  */

  let totalWords = 0;
  let countLetters = 0;

  if (words.length === 0) {
    console.log("Array is empty!");
    return null;
  }

  for (let i = 0; i < words.length; i++) {
    /* console.log(words[i].length); */
    countLetters += words[i].length;
    /* console.log(countLetters); */
    totalWords++;
    /* console.log("total elements ", totalWords); */
  }
  return countLetters / totalWords;
}

console.log(averageWordLength(words2));
// -------------------------------------------------------------------------------------------------

// Unique arrays - return an array without duplicates
console.log("-------------------------");

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // TODO:
  /*
  -repeated values: poison, simple and bring 
  -create new array
  -analyze each element of the array
  -if one element === another element, remove that element
  
  1. create new array variable (newArray)
  2. create a loop that goes through the words3 array
  3. index to go through all elements of the array
  4. check if newArray has first element and if not: add to newArray, if yes, ignore
  5. return newArray
  */

  let newArray = [];

  /* for (i = 0; i < words.length; i++) {
    if (!newArray.includes(words[i])) {
      newArray.push(words[i]);
    }
  } */

  // array.forEach( (element)=>{...} );
  // OR
  // array.forEach( function(element){...} );
  words.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}

console.log(uniquifyArray(words3));

// -------------------------------------------------------------------------------------------------

// Find elements
console.log("-------------------------");

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  // TODO: the find array method requires a callback function and returns true/false: the first element that satisfies the condition
  /*
  const found = array.find( (element) => {...} );
  1. create new variable to store found element
  2. use find array method to find the element in the haystack arrray
  3. compare element with needle
  4. return found variable if element === needle
  */

  /* cant make this work ↓↓↓↓
  const found = haystack.find((element) => {
    element === needle;
    return found;
  }); */

  return haystack.includes(needle);
}
// -------------------------------------------------------------------------------------------------

// Count repetition
console.log("-------------------------");

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  // TODO:
}

// -------------------------------------------------------------------------------------------------

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
console.log("-------------------------");

const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
}

// -------------------------------------------------------------------------------------------------

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array
console.log("-------------------------");

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

// -------------------------------------------------------------------------------------------------

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
