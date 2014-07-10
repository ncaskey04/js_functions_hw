//The prime number checker

var isPrime = function(num) {
	if ( num === 1 || num === 2) {
		return true;
	} else {
		for (var i = 2; i < num; i++) {
			if(num % i === 0) {
				return false;
			} 
		};
		return true;
	}
}

console.log(isPrime(4));

// The prime number getter

var primes = function(max) {
	for (var i = 1, i < max; i++);

}


// End result will be an array of primes up to a max number
// i.e. if max = 25, return [1,2,3,5,7,11,13,17,19,23]

// maybe achieved by iterating over a range of numbers (the array), which will be done by primes
// & checking to see if each number in that array is prime (done by isPrime function). if it is...pass it to our final array, otherwise drop it.

