/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function reversedString(str) {
  return str.toLowerCase().split("").reverse().join("");
}

function isPalindrome(str) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == " " ||
      str[i] == "?" ||
      str[i] == "." ||
      str[i] == "," ||
      str[i] == "!"
    ) {
      continue;
    } else {
      newString += str[i];
    }
  }

  return newString.toLowerCase() === reversedString(newString);
}

module.exports = isPalindrome;
