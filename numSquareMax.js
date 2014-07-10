var perfSquares = 121;

var numSquare = function(maxNum){
	var perfArray = [];

	for (var i = 1; i <= Math.sqrt(maxNum); i++){
		perfArray.push(i*i);
	}
	return perfArray;
};

console.log(numSquare(perfSquares));

