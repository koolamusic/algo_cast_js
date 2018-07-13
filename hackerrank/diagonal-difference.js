
var arr = [
[3,5,2],
[6,12,4],
[9,3,10]
];


// Complete the diagonalDifference function below.
// const n = parseInt(readLine());
function diagonalDifference(arr) {
  var value = 0;
  var valueTwo = 0;
    for (var i=0; i < arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            if (i === j){
              value +=  arr[i][j];
//               console.log(value);
              valueTwo += arr[i].length - 1;
              console.log(arr[i][j+i]);
            } 
//           else{
//               valueTwo += arr[i].length - i;
//               console.log(valueTwo);
//             }
//           if (arr[i].length - 1 === i){
//             valueTwo += arr[i][j];
//             console.log(arr[i][j]);
          
        }
    }
  return Math.abs(value + valueTwo);
}

diagonalDifference(arr);




// function diagonalDifference(arr) {
// let primaryDiag = 0;
// let secondaryDiag = 0;
// let length = arr.length;
//   console.log(length);

// for (var i = 0, indexLength = length - 1; i < length; i++) {
//     primaryDiag += arr[i][i];
//     secondaryDiag += arr[i][indexLength];
//       console.log(arr[i][indexLength])
//     indexLength -= 1 ;

// }

// return Math.abs(primaryDiag - secondaryDiag);


// }

