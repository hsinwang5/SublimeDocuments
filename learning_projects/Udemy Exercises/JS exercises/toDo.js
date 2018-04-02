
window.setTimeout(function() {

var isQuit = true;
var toDo = [];
var info;


while (isQuit) {
	info = prompt("What would you like to do?");
	if (info === "new") {
		var list = prompt("Enter a new to do");
		toDo.push(list);
	} 
	else if (info === "list") {
		console.log(toDo);
	}
	else if (info === "quit") {
		isQuit = false;
	} 
	else {
		console.log("invalid command");
	}
}

}, 500);

function reverse(arr) {
	var newArr = [];
	
	arr.forEach(function(a, index) {
		newArr[arr.length-(index)] = a;
	})
	console.log(newArr);
}

function myForEach(arr, func) {
	for (i=0; i < arr.length; i++) {
		func(arr[i]);
	}
}

var func = function() {
	console.log("success");
}

var func = function(str) {
	console.log("hi")
}

var dude = {
	name: "Taylor";
	age: "26";
	dog: {
		name: "Rusty";
		age: "3";
	}
}

//objects nested inside arrays as posts

var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["+1 dude", "oh yeah"]
	}, 
	{
		title: "Cats are actually awesome",
		author: "Brodude",
		comments: ["errr yeah right", "I hate cats"]
	}
]

someObject.friends[0].name