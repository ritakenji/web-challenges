console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("response: ", response);
  const data = await response.json(); // converting the data that the API sent us (JSON) into JS.
  console.log("'data' object: ", data);
  console.log("Value of object 'data': ", data.results);
  console.log("Eye color of R2-D2: ", data.results[2]["eye_color"]);
  return data;
}

fetchData();
