// DOM constants
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const btnGenerate = document.getElementById('generate-password');

// Main password function

function createPassword () {

    // Password array constants and accumulator
    const upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const lowerArr = ["abcdefghijklmnopqrstuvwxyz"];
    const numberArr = ["1234567890"];
    const symbolArr = [" `~!@#$%^&*()-_=+{}[]:;'|<,>.?/"];

    // Combined password variable
    let combinedPass = "";

    // Get password length
    let passLength = parseInt(lengthEl.value);

    if (passLength < 8 || passLength > 128 || passLength === null) {
        alert("Password must contain at least 8 characters and be no longer than 128 characters. Please check your number and try again.");
        return "";        
    } 

    // Build combined password array

    if ((uppercaseEl.checked || lowercaseEl.checked || numbersEl.checked || symbolsEl.checked) === false) {
        alert("You must choose at least one checkbox to build a password.");
        return "";
    }

    if (uppercaseEl.checked === true) {
        combinedPass += upperArr;
    }

    if (lowercaseEl.checked === true) {
        combinedPass += lowerArr;
    }

    if (numbersEl.checked === true) {
        combinedPass += numberArr;
    }

    if (symbolsEl.checked === true) {
        combinedPass += symbolArr;
    }

    // Build password
    let generatedPassword = "";

    for (var i = 0; i < passLength; i++ ) {
        generatedPassword += combinedPass[Math.floor(math.random() * passLength)];
    }

    // Display completed password in text field
    passwordEl.textContent = generatedPassword;
    console.log(generatedPassword);

}

// Capture click event from Generate Password button
btnGenerate.addEventListener("click", createPassword);