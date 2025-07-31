console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const title = "Post Title";
const text = "Text content for the post";
let likes = 666; //Is it more correct to define the value as 'null' here if my initial value is 0 instead of defining it as '0'? It's more correct to be a 0
let user = "My Name";
let isReported = false; //Can I use 'null' if I don't know if the statement is true or false? Yes but then it stops being a boolean
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);
console.log(likes);
console.log(user);
console.log(isReported);
likes++;
console.log(likes);
// --^-- write your code here --^--
