function sieve(n){
	var primes = [];

for (var i = 0; i <= n; i++){
	primes[i] = true;
// 	console.log(primes);
  }

primes[0] = false;
primes[1] = false;

for (i = 2; i < Math.sqrt(n); i++){
	for (j = 2; j * i <= n; j++){
	  primes[i * j] = false;
	}
		console.log(primes);
  }

var result = [];
for (i = 0; i < primes.length; i++){
	if (primes[i]) result.push(i);
	}
return result;
}
