
	//element containers
	var titleBar = document.querySelector("#titleBar");
	var RGB = document.querySelector(".RGB");
	var newColorsButton = document.querySelector("#mainButton");
	var chatBox = document.querySelector("#chatBox");
	var easyButton = document.querySelector("#easyButton");
	var hardButton = document.querySelector("#hardButton");
	//select all game squares
	var panelsArray = document.querySelectorAll(".panels");
	//RGB array for RGB text element - default black
	var RGBarray = [0, 0, 0];
	var hardMode = true;

	//converts RGB array into a format suitable for CSS
	function createRGBstring() {
		var arr = [];
		for (let i = 0; i < 3; i++) {
			arr[i] = random(255);
		}
		var string = "rgb";
		string += "(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
		return string;
	}
	//Try Again
	function tryAgain(panelsArray) {
		chatBox.innerHTML = "Try Again!";
		panelsArray.style.backgroundColor = "rgb(0, 0, 0)";
	}
	//Correct!
	function correct(color, panelsArray) {
		chatBox.innerHTML = "Correct!";
		titleBar.style.background = color;
		for (let i = 0; i < panelsArray.length; i++) {
			panelsArray[i].style.background = color;
		}
	}
	//randomize RGB color - creates random array of length x
	function createRGBArray(length) {
		var arr = [];
		for (let i = 0; i < length; i++) {
			arr[i] = createRGBstring();
		}
		return arr;
	}


	//replaces the entire panels array minus listeners
	// function removeListeners() {
	// 	var original = document.querySelector("main");
	// 	var clone = original.cloneNode(true);
	// 	original.parentNode.replaceChild(clone, original);
	// }

	//Starts a new game, returning the value of the correct panel
	function startNewGame(difficulty) {
		titleBar.style.background = "skyblue";
		chatBox.innerHTML = "";
		var colorsArray = createRGBArray(difficulty);
		RGB.innerHTML = colorsArray[random(difficulty - 1)];
		//creates listeners on panels according to difficulty
		for (let j = 0; j < panelsArray.length; j++) {
			if (j < difficulty) {
				panelsArray[j].style.background = colorsArray[j];
				panelsArray[j].addEventListener("click", ax=function() {
					if (this.style.backgroundColor === RGB.innerHTML) {
						correct(RGB.innerHTML, panelsArray);
					} else {
						tryAgain(this);
					}
				});
				panelsArray[j].classList.remove("hide");
			} else {
				panelsArray[j].classList.add("hide");
			}
		}
	}

	easyButton.addEventListener("click", function() {
		hardButton.classList.remove("selected");
		easyButton.classList.add("selected");
		hardMode = false;
		startNewGame(3);
	})

	hardButton.addEventListener("click", function() {
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		hardMode = true;
		startNewGame(6);
	})

	newColorsButton.addEventListener("click", function() {
		if (hardMode) {
			startNewGame(6);
		} else {
			startNewGame(3);
		}
	})

	//utility - random int up to and including [limit] using math.random function
	function random(limit) {
		return Math.floor(Math.random() * limit + 1);
	}

	startNewGame(6);

