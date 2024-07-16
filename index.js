// This file has some potential linting issues for you to test

console.log("Hello, world!"); // Missing semicolon

var message = "This is a global variable"; // Using `var` instead of `let` or `const`
message = "This is a reassignment";

function add(a, b) {
  // Missing curly braces for a single-statement function
  return a + b;
}

const result = add(5, 3);
console.log(`The sum is: ${result}`); // Using template literals without backticks

// This line is not actually used
const unusedVariable = "I am unused";

// This file is intended to be large and repetitive for linter caching tests

const repeatedString = "This is a repeated string to bloat the file size.";

function generateLargeArray(size) {
  const largeArray = [];
  for (let i = 0; i < size; i++) {
    largeArray.push(repeatedString);
  }
  return largeArray;
}

const largeData = generateLargeArray(10000); // Adjust the size as needed

// Looping through the large array (can be replaced with other operations)
largeData.forEach((item) => {
  // No action needed here, just iterating for size
});

// More unused variables to increase file size (remove or modify as needed)
const unusedVariable1 = "I am unused 1";
const unusedVariable2 = "I am unused 2";
const unusedVariable3 = "I am unused 3";

// Intentionally empty functions to reach a larger file size (remove or modify)
function emptyFunction1() {}
function emptyFunction2() {}
function emptyFunction3() {}

// You can add more repetitive code sections here to further increase file size

export default largeData; // Optional export if your linter supports it
