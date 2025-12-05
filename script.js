let inputField = document.getElementById("input");

function one() {
    inputField.innerText += 1;
}
function two() {
    inputField.innerText += 2;
}
function three() {
    inputField.innerText += 3;
}
function four() {
    inputField.innerText += 4;
}
function five() {
    inputField.innerText += 5;
}
function six() {
    inputField.innerText += 6;
}
function seven() {
    inputField.innerText += 7;
}
function eight() {
    inputField.innerText += 8;
}
function nine() {
    inputField.innerText += 9;
}
function zero() {
    inputField.innerText += 0;
}
function point() {
    inputField.innerText += ".";
}


// operators
function add() {
    inputField.innerText += "+";
}
function subtract() {
    inputField.innerText += "-";
}
function multiply() {
    inputField.innerText += "*";
}
function divide() {
    inputField.innerText += "/";
}

// delete function
function clearInput() {
    inputField.innerText = null;
}

// calculate function
function calculate() {
    inputField.innerText = eval(inputField.innerText);
}