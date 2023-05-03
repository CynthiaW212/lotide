// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F602} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  } else {
    let i = 0;
    while (i < array1.length) {
      if (array1[i] === array2[i]) {
        i++;
      } else {
        return false;
      }
    }
    return true;
  }

};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);