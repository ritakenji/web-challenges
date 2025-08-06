// Change this value to test different "weather" conditions.
const weather = "snowy";
const temperature = -9; //needs to go on top before switch
switch (
  true // gotta turn it into a boolean
) {
  case weather === "rainy":
    console.log("It's raining! Don't forget your umbrella!");
    break;
  case weather === "sunny" && temperature > 20:
    console.log("It's sunny and warmm!");
    break;
  case weather === "sunny" && temperature <= 20:
    console.log("It's sunny, but a bit chilly!");
    break;
  case weather === "snowy" && temperature < 0: //the most specific case should be above all other because the switch will check cases from top to bottom, so given that snowy is true, it will run the first matching case
    console.log("Freezing now!");
    break;
  case weather === "snowy":
    console.log("It's snowing, stay warm!");
    break;
  default:
    console.log("I'm not sure what the weather is like");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
//moved variable to the top
