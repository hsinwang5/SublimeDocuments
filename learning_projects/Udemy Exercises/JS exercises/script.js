var firstName = prompt("What is your first name?");
var lastName= prompt("What is your last name?");
var age = prompt("Ok, how old are you?")

console.log("Hello, " + firstName + " " + lastName + ", you are " + age + " years old!");
alert("Hello, " + firstName + " " + lastName + ", you are " + age + " years old!");

var num = 1;

while (num <= 20) {
	if (num % 4 === 0) {
		console.log(num);
	}
	++num;
}

Print all # between -10 and 19

var num = -10;

while (num < 20) {
	console.log(num);
	num++;
}

var num = 5;

while (num < 51) {
	if (num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num++
}

function addNumbers(num1, num2) {
	return(num1+num2);
}

