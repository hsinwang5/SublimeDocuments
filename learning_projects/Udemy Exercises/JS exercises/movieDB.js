var movieArray = [
	{
		title: "Planet Earth 2",
		rating: 5,
		seen: true 
	},
	{
		title: "Life of Pi",
		rating: 3,
		seen: true
	},
	{
		title: "Frozen",
		rating: 5,
		seen: false
	}
]

movieArray.forEach(function(movie) {
	var isWatched = movie.seen;
	var result = "You have ";
	if (isWatched) {
		console.log(result + "watched " + movie.title + " - " + movie.rating + " stars");
	}
	else {
		console.log(result + "not seen " + movie.title + " - " + movie.rating + " stars");
	}
});