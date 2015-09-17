//1. Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

var firstReverse = function(string) {
	var stringArray = string.split(' ');

	for( var i = 0; i < stringArray.length; i++) {
		var reverseIt = stringArray.reverse();
		stringArray[i] = reverseIt;
	}
	
		return stringArray;

}

console.log(firstReverse("I can't feel my face when I'm with you."))

