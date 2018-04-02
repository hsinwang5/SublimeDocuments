window.onload = function() {
	
	var p1 = document.querySelector("#p1"); 
	var p2 = document.querySelector("#p2");
	var pt = document.querySelector("#playingTo");
	var p1Button = document.querySelector(".p1Button");
	var p2Button = document.querySelector(".p2Button");
	var resetButton = document.querySelector(".resetButton");
	var input = document.querySelector("input");
	var p1tracker = 0; 
	var p2tracker = 0;
	var ptTracker = 5;
	


	function replaceHTML(el, text) {
		el.innerHTML = text;
	}

	function checkVictory(el, tracker) {
		if (tracker >= ptTracker) {
			el.style.color = "green";
			p1Button.setAttribute("disabled", "true");
			p2Button.setAttribute("disabled", "true");
		}
		
	}

	//player one button
	p1Button.addEventListener("click", function() {
		p1tracker += 1;
		replaceHTML(p1, p1tracker);
		checkVictory(p1, p1tracker);
	})

	//player two button
	p2Button.addEventListener("click", function() {
		p2tracker += 1;
		replaceHTML(p2, p2tracker);
		checkVictory(p2, p2tracker);
	})

	//reset game state
	resetButton.addEventListener("click", function() {
		p1.style.color = "black";
		p2.style.color = "black";
		replaceHTML(p1, 0);
		replaceHTML(p2, 0);
		p1tracker = 0;
		p2tracker = 0;
		p1Button.removeAttribute("disabled");
		p2Button.removeAttribute("disabled");
		ptTracker = 5;
		replaceHTML(pt, ptTracker);
		input.value = 5;
	})

	//victory condition selector
	input.addEventListener("change", function() {
		ptTracker = Number(input.value);
		replaceHTML(pt, ptTracker);
	})
}