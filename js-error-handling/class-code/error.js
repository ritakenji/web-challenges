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
async function fetchData() {
  try {
    const response = await fetch("adasdasd");
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

async function handleFetchData() {
  const result = await fetchData();
  if (result.error) {
    console.log("An error occurred: ", result.error.message);
  } else {
    console.log("fetched data: ", result.data);
  }
}

handleFetchData();
