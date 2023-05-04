const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Function eqArrays is used to compare two arrays and determine if they are equal. If the two arrays are equal, the function returns true. If the arrays are not equal, the function returns false.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("length is not same");
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

/*Function assertArrayEqual is used to compare two arrays and determine if they are equal and console.log an appropriate message to the console.
Here we don't consider about comparing  nested arrays
*/
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(array1, "and", array2, "are equal!");
  } else {
    console.log(array1, "and", array2, "are not equal!");
  }

};

const results1 = map(words, word => word[0]);

//TestCases
assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results1,["ground", "control", "to", "major", "tom"]);