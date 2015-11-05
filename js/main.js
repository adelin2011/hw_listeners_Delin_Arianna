var pageheader = document.getElementById("heading"); 
	heading.addEventListener("click," function modifyHTML(){
		console.log("You clicked me");
	}

var paragraph = document.createElement("p"); 
var node = document.createTextNode ("This is click number x"); 
paragraph.appendChild(node); 
var element = document.getElementById("div1"); 
element.appendChild(paragraph); 	