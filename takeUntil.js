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


//Main Function:The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  // find the index first
  const findIndex = array.findIndex(callback);
  
  return array.slice(0, findIndex);
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TestCases
assertArrayEqual(results1,[1, 2, 5, 7, 2]);
assertArrayEqual(results2,["I've", "been", "to", "Hollywood"]);



