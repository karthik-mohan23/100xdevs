/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  let lowercasedString = str.toLowerCase();

  for (let i = 0; i < lowercasedString.length; i++) {
    if (vowelSet.has(lowercasedString[i])) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
