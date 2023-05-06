const eqArrays = require('./eqArrays');

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

module.exports = assertArrayEqual;
