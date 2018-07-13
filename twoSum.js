function twoSum(arr, num){
	var pairs = [];
	for (i = 0; i < arr.length; i++){
	for (j = 0; j < arr.length; j++){
		var subPair = []
	  if (arr[i] + arr[j] === num){
		subPair.push(arr[i]);
		subPair.push(arr[j]);
		console.log("we found " + arr[i] + "and " + arr[j] );
			pairs.push(subPair);
		console.log(subPair);
	}

	}
  }
	return pairs;
}

THis is an O(n^); Time complexity algorithm


Hello Sir, 
I was working on the TwoSum Algorithm using a nested ForLoop and has a slight bug, not sure where its coming from 

function twoSum(arr, num){
	var pairs = [];
	for (i = 0; i < arr.length; i++){
	for (j = 0; j < arr.length; j++){
		var subPair = []
	  if (arr[i] !== arr[j] && arr[i] + arr[j] === num){
		subPair.push(arr[i]);
		subPair.push(arr[j]);
		console.log("we found " + arr[i] + "and " + arr[j] );
			pairs.push(subPair);
		console.log(subPair);
	}

	}
  }
	return pairs;
}

The First Code works very fine when I use this array 
let num = [1, 2, 6, 4, 5, 3, 3];

When I pass in a Test Like twoSum(num, 6);
The Last Two elements in the Array outputs 4 Times; 
Meaning It pairs with itself; 

How do I Eliminate an iteration from Pairing with itself without creating a new array. 




// Two Sum Algorithm using the hashtable method 
function two(numArray, sum){
	var pairs = [];
	var hashtable = [];

for (var i = 0; i < numArray.length; i++){
		var currNum = numArray[i];
		var counterpart = sum - currNum;
	console.log(counterpart);
		if (hashtable.indexOf(counterpart) !== -1){
			pairs.push([ currNum, counterpart ]);
	console.log(pairs);
		}
	hashtable.push(currNum);
	console.log(hashtable);

	}

return pairs;
}

// --------------------------------------
