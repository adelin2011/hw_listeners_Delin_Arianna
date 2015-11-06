var header = document.getElementById("heading"); 
heading.addEventListener("mouseenter", function ( event) {
	event.target.style.color = "red"; 
}); 

var image = document.getElementById("image"); 
image.addEventListener("click", function(){
	console.log("This class is great"); 
}); 

var paragraph = document.getElementById("graph"); 
graph.addEventListener("click", function(){
	console.log("smiley face"); 
}); 
