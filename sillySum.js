var testArray = [1,2,3,4,5];

var sillySum = function(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++){
		total += (array[i]*i);
	};
	return total;
};

console.log(sillySum(testArray));