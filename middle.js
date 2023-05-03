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
        console.log(i);
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

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  const midArray = [];
  const length = array.length;
  
  if (length > 2) {
    let index = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      midArray.push(array[index - 1]);
      midArray.push(array[index]);
    } else if (length % 2 !== 0) {
      midArray.push(array[index]);
    }
  }
  return midArray;
};

//Test code
assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArrayEqual(middle([1, 2]),[]);
assertArrayEqual(middle([1]),[]);