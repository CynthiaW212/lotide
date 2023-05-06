const eqArrays = require('./eqArrays');


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

module.exports = middle;

