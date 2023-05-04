// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F602} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const source = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

//Main Function : findkey()
const findKey = function(origins, callback) {
  //Loop origins, find the first key match callback request
  for (let item in origins) {

    if (callback(origins[item])) {
      return item;
    }
  }
  
};

//Testcase
assertEqual(findKey(source,x => x.stars === 2),"noma");
assertEqual(findKey(source,x => x.stars === 3),"Akaleri");