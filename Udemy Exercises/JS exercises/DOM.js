
window.onload = function() {
	var tag = document.getElementById("highlight");
	tag.style.color = "blue";

	tag.innerHTML = "replaced <strong>with</strong> textContenta";

	var aLink = document.querySelector("a");
	aLink.setAttribute("href", "http://www.bing.com");
	aLink.innerHTML = "Link to Bing";

	var body = document.querySelector("body");

	var button = document.querySelector("button");
	button.addEventListener("click", function () {
		body.classList.toggle("bgColor");
	})
}
