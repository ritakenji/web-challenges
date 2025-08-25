console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("response: ", response);
  const data = await response.json(); // converting the data that the API sent us (JSON) into JS.
  return data;
}

const character = await fetchData();

console.log("I am here");
console.log("'character' object: ", character);
console.log("Values of object 'charater': ", character.results);
console.log("Eye color of R2-D2: ", character.results[2]["eye_color"]); //for spaces and '-', use []
console.log("Eye color of R2-D2: ", character.results[2].eye_color);
