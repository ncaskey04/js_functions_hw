var isPrime = function(num) {
	if ( num === 1 || num === 2) {
		return true;
	} else {
		for (var i = 2; i < num; i++) {
			if(num % i === 0) {
				return false;
			}
		}
		return true;
	}
}

console.log(isPrime(9));