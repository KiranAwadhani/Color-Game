var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButons = document.querySelectorAll(".mode");
init();
function init(){
		document.getElementById('container').style.display = 'none';
}

for(i=0; i<modeButons.length; i++){

		document.getElementById('container').style.display = 'block';

	
	modeButons[i].addEventListener("click", function(){

		modeButons[0].classList.remove("selected");

		modeButons[1].classList.remove("selected");

		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares =6;

		reset();

	})

}



function reset(){
	
	colors = generateRandomColors(numSquares);
	//new random colors
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(i=0; i<squares.length; i ++){

		if(colors[i]){

			squares[i].style.display = "block";

			squares[i].style.background = colors[i];

		}else{

			squares[i].style.background = "none";

		}

	}

	h1.style.background = "steelblue";

}


for(i=0;i<squares.length;i++){
squares[i].style.background = colors;
squares[i].addEventListener('click',function(){
	var clickedColor = this.style.background;
	if(clickedColor === pickedColor){
		changeColors(clickedColor);
		messageDisplay.textContent = "correct";
		resetButton.textContent = "Play Again";
		h1.style.background = clickedColor;
	}else
	{
		this.style.background = "black";
		messageDisplay.textContent = "Try Again(IT IS BLACK)";
	}
});
}

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function(){
	reset();
});    

function changeColors(color){

	//loop through all squares

	//change color to match given color

	for(i=0; i<colors.length; i++){

		squares[i].style.background = color;

	}

}



function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}



function generateRandomColors(num){
	//makes array
	var arr = [];
	//add num random colors
	for(i=0; i<num; i++){
		//get random color and push to array
		arr.push(randomColor());
	}
	//return array at the end
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


