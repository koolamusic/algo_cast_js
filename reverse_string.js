var strn = 'bernadine';

// REDUCE 
console.log(strn.split('').reduce(function (acc, curv
                                           ) {
  return curv + acc; 
}, '' 
                                
 ));



// FOR OF
// for(var char of str){
//   reversed = char + reversed
// }
// return reversed;


// FOR LOOP 



// REVERSE STRING (JOIN REVERSE SPLIT)



// RECURSION AND SUBSTRINGS 

function revStr(str){
if (str === '') return;
  return revStr(str.subStr(i) + str.Char(0))
}

revStr(strn);

