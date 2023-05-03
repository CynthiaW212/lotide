// FUNCTION assertEqual to examine the result
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`\u{1F600} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1F602} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//This is main function. It takeS in a sentence (as a string) and then return a count of each of the letters in that sentence. The letter in lowercase and uppercase seems as same letter.
const countLetters = function(inputString) {
  const result = {};
  const formatString = inputString.split(" ").join("").toLowerCase();
  
  for (let letter of formatString) {
    if (result[letter]) {
      result[letter] ++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//Test case
assertEqual(countLetters("This is a string")["i"], 3);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["e"], 3);
assertEqual(countLetters("lighthouse in the house")["h"], 4);