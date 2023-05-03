// Function eqArrays is used to compare two arrays and determine if they are equal. If the two arrays are equal, the function returns true. If the arrays are not equal, the function returns false.
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

// Function assertArrayEqual is used to compare two arrays and determine if they are equal and console.log an appropriate message to the console.
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(array1, "and", array2, "are equal!");
  } else {
    console.log(array1, "and", array2, "are not equal!");
  }

};

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
