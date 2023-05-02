// FUNCTION IMPLEMENTATION: compare two inputs
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F602} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let resultArray = [];
  console.log(array);
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      console.log(array[i]);
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const one = tail(["Hello"]);
assertEqual(one.length, 0);
