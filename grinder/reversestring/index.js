// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using the array reverse method
function reverse(str) {
  return str
    .split("")
    .reverse("")
    .join("");
}

// using reduce accumulator and current value
function reverse(str) {
  return str.split("").reduce((acc, curValue) => curValue + acc);
}

// using the for of syntax
function reverse(str) {
  // we initially define reversed as an empty string in within the function
  let reversed = "";

  // The for of loop iterates over elements
  for (var character of str) {
    // var reversed = []
    // store the value into reversed recursively
    reversed = character + reversed;

    // use a debugger 
    // - node inspect file.js
    // This can iterate over for loops, reduce, map statements so you can see behind the hood
    // For functions, call the functions manually
  }
  // return the value of reveresed in our function
  return reversed;
}

module.exports = reverse;
