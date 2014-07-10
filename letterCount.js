var letterCount = function(word) {
	var history = {};
	var array = word.split("");
	for (var i = 0; i < array.length; i++) {
		var key = array[i];
		if(key in history) {
			history[key] = history[key] + 1;
		} else {
			history[key] = 1
		}
	};
	return history;
}

var userString = "apple";
var result = letterCount(userString);
console.log(result);