//Colors to be applied to square divs
var numSquares = 6;
var colors = [];
var pickedColor;
//JavaScript selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() { 
    //mode button event listeners
    for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
        });
    }
        //color square setup
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent="You got it!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Another round?";
                
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent="Try again!";
            }
        })
    }
    reset();
}

//Reset Button Event Listener
resetButton.addEventListener("click", function(){
    reset();
})


//================
//Functions
//================

//Picks the colors for the colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


//Puts the colors array into the squares
function changeColors(color) {

    //loop through all COLORS array
    for (var i = 0; i < colors.length; i++) {
    //change SQUARES to match pickedColor variable
    squares[i].style.backgroundColor = color;
    }
}


//Creates random values for RGB
function randomColor(){

    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


//Takes the random RGB values and makes the colors array from them.
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
    }
    //return array
    return arr;
}

//Reset the motherfucker
function reset() {
h1.style.backgroundColor = "steelblue";
resetButton.textContent = "Reset Colors";
messageDisplay.textContent = "";

colors = generateRandomColors(numSquares);
//pick a new winning color
pickedColor = pickColor();
//change colorDisplay to match pickedColor
colorDisplay.textContent = pickedColor;
//change colors of squares
for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = "none";
    }
}};






//Version 1:

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
    
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     resetCosmetic();
// });


// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//    for (var i = 0; i < squares.length; i++) {
//        squares[i].style.backgroundColor = colors[i];
//        squares[i].style.display = "block";
//     }
//    resetCosmetic();
// });


// var easyBtn = document.querySelector("#easyBtn")
// var hardBtn = document.querySelector("#hardBtn")