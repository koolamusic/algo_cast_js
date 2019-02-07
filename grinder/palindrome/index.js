// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str.split('').reverse().join('') === str
// }

function palindrome(str) {
  let array = str.split('')
  debugger;
  // let comparison = array[index]  == array.length-1
  split.every((val, index) => {
    return val === str.[str.length - index - 1];
    debugger;
  })
}
palindrome("ada")
module.exports = palindrome;
