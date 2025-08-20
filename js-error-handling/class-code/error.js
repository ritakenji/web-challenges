/* console.log("test");

function greet(user) {
  try {
    const { name } = user;
    return name;
  } catch (error) {
    console.error("invalid name:", error.message);
    return "invalid name";
  }
}

console.log("greet({ name: 'hanna' }) shows: ", greet({ name: "hanna" }));
console.log("--------------");
console.log("greet(undefined) shows: ", greet(undefined));
console.log("--------------");
console.log("greet(null) shows: ", greet(null));
console.log("--------------");
console.log("greet(2) shows: ", greet(2)); */ // <-- wrapped in to an Number object, results in undefined

// ---- divide ----
/* function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by 0 is not allowed!!!");
  }
  return a / b;
}

try {
  console.log("divide(3, 1): ", divide(3, 1));
  console.log("divide(3, 1): ", divide(3, 0));
} catch (e) {
  console.error("divide error: ", e.message);
} */

// ---- fetch ----

/* In the fetchData if we want we can pass the URL for the fetch as a paramater in the function. The fetch needs the url to where to do the fetch, this one usually change is not always the same. Therefore, we can add the url as a paramater to the function fetchData and then pass an argument when we call it. */

async function fetchData(url) { // fetchData (parameter) 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch funny data");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("fetchData error: ", error.message);
    return { error };
  }
}
/* ↑ ↑ ↑ this function could go in utils folder cause it can be used in any part of the application ↑ ↑ ↑ */

async function handleFetchData() {
  const result = await fetchData(API-url.com); //fetchData (argument)
  if (result.error) {
    console.log("An error occurred: ", result.error.message);
  } else {
    console.log("fetched data: ", result.data);
  }
}

handleFetchData();
