const data = null;

switch (true) {
  case typeof data === "undefined":
    console.log("undefined!");
    break;
  case typeof data === "null":
    console.log("null!");
    break;
  case typeof data === "number":
    console.log("number!");
    break;
  case typeof data === "NaN":
    console.log("not a number!");
    break;
  case typeof data === "string":
    console.log("string!");
    break;
  case typeof data === "boolean":
    console.log("boolean!");
    break;
  case typeof data === "function":
    console.log("function!");
    break;
  case typeof data === "object":
    console.log("object!");
    break;
  case typeof data === "array":
    console.log("array!");
    break;
  default:
    console.log("I have no idea!");
}
/*
TESTED:
const data = 23; --> number!
const data = "hello"; --> string!
const data = { a: 1 } --> object!
const data = [1, 2, 4]; --> object! (technically an array)
const data = Math.sin; --> function!
const data = null --> object! (technically a null value)
*/
