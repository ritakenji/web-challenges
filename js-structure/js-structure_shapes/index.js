import Circle from "./components/Circle.js";
import Square from "./components/Square.js";
import Pentagon from "./components/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonElement = Pentagon();

root.append(circleElement, squareElement, pentagonElement);
