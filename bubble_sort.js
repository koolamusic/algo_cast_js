function bubbleSort (arr){
let sortArr = arr;
// let tempNum = 0;
	for (i = arr.length; i > 0; i--){
	  for (j = 0; j < arr.length; j++){
		if (arr[j] > arr[j + 1]){
		  tempNum = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = tempNum;
		}
	}
		
  }

return arr;
}
