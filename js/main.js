var header = document.getElementById("heading"); 
heading.addEventListener("mouseenter", function ( event) {
	event.target.style.color = "red"; 
}); 

var image = document.getElementById("image"); 
image.addEventListener("click", function(){
	console.log("This class is great"); 
}); 

var graph = document.getElementById("graph"); 
graph.addEventListener("focus", function(event){
	event.target.style.background = "purple"; 
}, true); 
graph.addEventListener("blur", function (event){
	event.target.style.background = ""; 
}, true); 

//First EventListener is for the header. This mouseenter changes it to red when it is moused over.
//Second EventListener is for the image. This watches for when the image is clicked on, it produces the string "This class is great." 
//Third EventListener is for the paragraph. This plaes the text in and out of focus. 