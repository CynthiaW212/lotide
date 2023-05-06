const tail = function(array) {
  let resultArray = [];
  console.log(array);
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      console.log(array[i]);
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};

module.exports = tail;

