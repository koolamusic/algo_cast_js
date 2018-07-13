// Solve Factorial in javascript using recursion 



function factorial(num){
  if (num === 1) {
	return num;
	console.log(num)
	} 
	  else {
	return num * factorial(num -1);
  }

}
