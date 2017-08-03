// VARIABLE DECLARATIONS & ASSIGNMENT

// Declare variables
var dinner;
// Assign variables
dinner = "kimchi";
// Read variables
console.log("dinner is", dinner)
// Re-assign variables
dinner = "sushi";

console.log("dinner is:", dinner);
// Output in a string (concatenation)
var firstName = "Lilli";
var lastName = "Izumi";

console.log (firstName + " " + lastName);
// Arithemetic

console.log("addition: ", 2+7);
console.log("subtraction: ", 7-2);
console.log("multiplication: ", 2*7);
console.log("division: ", 10/5);

var a = 3;
var b = 3+2;

//LOGICAL EXPRESSIONS (using logical operators)

console.log("is 3 equal to 2?", 3 == 2);
console.log("is 4 equal to 4?", 4 == 4);
console.log("is a equal to b?", a == b);

//CONDITIONAL STATEMENTS (example of altering control flow by using logical expressions)
if ( a == b) {
	console.log("Yup, A is equal to B!");
}

else if (a == 3) {
	console.log("Sure does!");
}

else {
	console.log("Nope! Not even close...");
}
