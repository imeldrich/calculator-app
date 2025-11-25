let inputField = document.getElementById("input");

function one() {
    inputField.innerText += document.getElementById("input").innerText = 1;
}
function two() {
    inputField.innerText += document.getElementById("input").innerText = 2;
}
function three() {
    inputField.innerText += document.getElementById("input").innerText = 3;
}
function four() {
    inputField.innerText += document.getElementById("input").innerText = 4;
}
function five() {
    inputField.innerText += document.getElementById("input").innerText = 5;
}
function six() {
    inputField.innerText += document.getElementById("input").innerText = 6;
}
function seven() {
    inputField.innerText += document.getElementById("input").innerText = 7;
}
function eight() {
    inputField.innerText += document.getElementById("input").innerText = 8;
}
function nine() {
    inputField.innerText += document.getElementById("input").innerText = 9;
}
function zero() {
    inputField.innerText += document.getElementById("input").innerText = 0;
}
function point() {
    inputField.innerText += document.getElementById("input").innerText = ".";
}


// operators
function add() {
    inputField.innerText += document.getElementById("input").innerText = "+";
}
function subtract() {
    inputField.innerText += document.getElementById("input").innerText = "-";
}
function multiply() {
    inputField.innerText += document.getElementById("input").innerText = "*";
}
function divide() {
    inputField.innerText += document.getElementById("input").innerText = "/";
}

// delete function
function clearInput() {
    inputField.innerText = null;
}

// calculate function
function calculate() {
    inputField.innerText = eval(inputField.innerText);
}