// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

module.exports = reverse;
