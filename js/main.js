var header = document.getElementById("heading"); 
heading.addEventListener("mouseenter", function ( event) {
	event.target.style.color = "red"; 
}); 

var button = document.getElementById("mybtn"); 
mybtn.addEventListener("click", displayDate); 
function displayDate(){
	document.getElementById("graph").innerHTML = Date(); 
}

var image = document.getElementById("image"); 
image.addEventListener("click", function modifyHTML(){
	var image = document.getElementById("image"); 
	image.innerHTML = "You clicked on me!"; 
}); 


//First EventListener is for the header. This mouseenter changes it to red when it is moused over.
//Second EventListener is for the button. This changed the paragraph under it to the current date. 
//Third EventListener is for the image. This changes the image to a message when it is clicked on. 