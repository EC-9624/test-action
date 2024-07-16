// test.js

console.log("Hello from test file"); // Using single quotes as per XO rules

const testMessage = "This is a constant in the test file";

function multiply(a, b) {
  return a * b; // Using tabs for indentation as per XO rules
}

const testResult = multiply(7, 6);
console.log(`The product is: ${testResult}`);

// Unused variable with underscore prefix to satisfy XO rules
const _unusedTestVariable = "I am unused in the test file";

// Large array generation for file size
const testRepeatedString = "This is a repeated string in the test file.";

function generateTestArray(size) {
  const testArray = [];
  for (let i = 0; i < size; i++) {
    testArray.push(testRepeatedString);
  }
  return testArray;
}

const testLargeData = generateTestArray(8000);

// Using for...of instead of forEach as per XO rules
for (const item of testLargeData) {
  // No action needed, just iterating
}

// More unused variables with underscore prefix
const _unusedTest1 = "Unused test 1";
const _unusedTest2 = "Unused test 2";

// Empty functions
function _emptyTestFunction1() {}
function _emptyTestFunction2() {}

export default testLargeData;
