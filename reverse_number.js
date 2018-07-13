function reverseInt(num){
  const a = num.toString().split('').reverse().join('');
  return parseInt(a) * Math.sign(num);
}

console.log(reverseInt(-32))

// STEPS EXPLAINED
// Make the number a string
// Convert the String to an Array and Reverse the Array
// Convert the Reversed Array to a String
// Make the String a number
// Apply the Sign using Math.sign for +ve or -ve integers



// USING THE REDUCE METHOD TO ACHIEVE SIMILAR RESULTS

function reverseInt(num){
//   const a = num.toString().split('').reverse().join('');
//   return parseInt(a) * Math.sign(num);
  
  const a = num.toString().split('').reduce(function (acc, curV){
    return curV + acc;
  }); 
  return parseInt(a) * Math.sign(num);
  
  
  
  
}

console.log(reverseInt(-692))
