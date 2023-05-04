// FUNCTION assertEqual to examine the result
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F602} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function to compare two arrays
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);

  let boolKey = false;
  //Check whether 2 objects has same number of keys.
  if (keyObj1.length === keyObj2.length) {
    // Loop object1, check wether each object1[value] exists in object2
    for (let value of keyObj1) {
      // when not match, set boolKey as false, break loop
      if (Array.isArray(object1[value])) {
        //Check 2 arrays equal, equal return true
        boolKey = eqArrays(object1[value], object2[value]);
        //while not equal, stop loop
        if (boolKey === false) {
          break;
        }
      } else if (object1[value] === object2[value]) {
        boolKey = true;
      } else {
        boolKey = false;
        break;
      }
    }

  }
  return boolKey;
};

// Main function:compare actual and expected using eqObjects
const assertObjectsEqual = function(actual, expected) {
  //use the util library's inspect function
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

//Test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const stylishSleeveMultiColorShirtObject = { size: "medium", colors: ["blue", "red"], sleeveLength: "long" };
assertObjectsEqual(longSleeveMultiColorShirtObject , stylishSleeveMultiColorShirtObject);
