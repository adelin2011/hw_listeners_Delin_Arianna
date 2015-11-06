var pageheader = document.getElementById("pageheader"); 
pageheader.addEventListener("click", function modifyHTML(){
	console.log("You clicked me");

var paragraph = document.createElement("p"); 
paragraph.innerHTML = "This is click number 1"; 
var element = document.body; 
element.appendChild(paragraph); 
})