const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  let i = 0;
  while (i < array1.length) {

    if (array1[i] !== array2[i]) {
      return false;
    }

    i++;
  }
  return true;
  

};

module.exports = eqArrays;
