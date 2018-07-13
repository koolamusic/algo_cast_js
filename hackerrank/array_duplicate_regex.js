// Given an array, you must increment any duplicate element until all of 
// its elements are unique in addition, 
// the sum of its elements must be the minimum possible within the rules.
// This means that the sum of all the elements must be the smallest possible that can be attained. 

const array = [3,1,1,5,0,3,2,7,8];

function uniqueMin(arr){
  for (let i = 0; i < arr.length; i++){
    let newArr = arr.slice(0,i);
    let flag = true;
    while(flag){
      if (newArr.includes(arr[i])){
        arr[i]++;
        console.log(newArr);
      } else {
        flag = false;
      }
    }
  } 
  console.log(arr);
  return arr.reduce((sum,a) => sum + a);
}

uniqueMin(array);







// Given an array, you must increment any duplicate element until all of 
// its elements are unique in addition, 
// the sum of its elements must be the minimum possible within the rules.
// This means that the sum of all the elements must be the smallest possible that can be attained. 


const array = [3,1,1,5,0,3,2,7,8];
function arrayDup(arr) {
  for (let i =0; i < arr.length; i++){
    let sliceArr = arr.slice(0,i);
    let bool = true;
    while(bool){
      if (slice.Arr)
      console.log(arr[i]);
      
      
    }
    
  }

}

arrayDup(array);

// function arrayDup(arr) {
//   for (let i = 0; i < arr.length; i++){
//     let newArr = arr.slice(0,i).join('')
//     if (arr[i] === newArr.match(/\d/)) {
//       console.log(arr[i]); 
//     }
//   }


  
// }


// function arrayDup(arr) {
//     arr.forEach(function(item){
//       let exp = arr.join('');
//       if (exp.match(item)){
//         arr.push(item++);
//         console.log(arr);
//       }
      
//     });

// }





