
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


//Main function here
const letterPositions = function(sentence) {
  const results = {};
  // initial results[key] as the first index; if exist, push the other index in
  for (let i = 0; i < sentence.length; i++) {
    
    let key = sentence[i];

    if (results[key]) {
      results[key].push(i);
    } else {
      results[key] = [i];
    }
  }
  return results;
};

//Test
assertArrayEqual(letterPositions("hello").e, [1]);
assertArrayEqual(letterPositions("hello, Emily").e, [1]);
assertArrayEqual(letterPositions("hello, Emily").y, [11]);
assertArrayEqual(letterPositions("hello, Emily").l, [2,3,10]);
