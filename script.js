const inputField = document.getElementById("input");

function one() {
    inputField.value += 1;
}
function two() {
    inputField.value += 2;
}
function three() {
    inputField.value += 3;
}
function four() {
    inputField.value += 4;
}
function five() {
    inputField.value += 5;
}
function six() {
    inputField.value += 6;
}
function seven() {
    inputField.value += 7;
}
function eight() {
    inputField.value += 8;
}
function nine() {
    inputField.value += 9;
}
function zero() {
    inputField.value += 0;
}
function point() {
    inputField.value += ".";
}


// operators
function add() {
    inputField.value += "+";
}
function subtract() {
    inputField.value += "-";
}
function multiply() {
    inputField.value += "*";
}
function divide() {
    inputField.value += "/";
}

// delete function
function clearInput() {
    inputField.value = null;
}

// calculate function
function calculate() {
    inputField.value = eval(inputField.value);
}

// input validation
function validateInput() {
    if (inputField.value.match(/[^0-9+\-*/.]/g)) {
        inputField.value = inputField.value.replace(/[^0-9+\-*/.]/g, '');
    }
}