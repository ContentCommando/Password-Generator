// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Generate a password when the button is clicked

// Present a series of prompts for password criteria
// Length of password

// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)

// Code should validate for each input and at least
// one character type should be selected


// Once prompts are answered then the password should be 
// generated and displayed in an alert or written to the page




// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];



// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var allChars = upperCasedCharacters + lowerCasedCharacters + numericCharacters + specialCharacters; 

var randomPassword = document.getElementById("password")

// var lengthPrompt = 8;
// Function to prompt user for password options
function getPasswordOptions() {
var lengthPrompt = prompt("Select length of password." + "\n" + "Min. of 8 - Max 0f 128.");
if (lengthPrompt === "") {
  alert("You have made no input");
}
else if (lengthPrompt < 8) {
  alert(lengthPrompt + "\n" + "Your input is less than 8");
}
else if (lengthPrompt > 128) {
  alert(lengthPrompt + "\n" + "Your input is more than 128.")
}

else if (lengthPrompt >= 8 && lengthPrompt <= 128) {
  alert(lengthPrompt + "\n" + "Correct!");
  console.log("You chose a length of " + lengthPrompt);
var lowercaseConfirm = confirm("Include lower-case?");
if (lowercaseConfirm === true) {
  alert("You said to include lower-case");
  console.log(lowercaseConfirm + " for lowercase");
}
else {
  alert("You said to Ignore lower-case!")
  console.log(lowercaseConfirm + " for lowercase");
}
var uppercaseConfirm = confirm("Include UPPER-CASE?")
if (uppercaseConfirm === true) {
  alert("You said to include UPPER-CASE");
  console.log(uppercaseConfirm + " for UPPER-CASE");
}

else {
  alert("You said to Ignore UPPER-CASE")
  console.log(uppercaseConfirm + " for UPPER-CASE");
  
}

var numericConfirm = confirm("Include Numeric characters?");
if (numericConfirm === true) {
  alert("You said to include numeric characters.")
  console.log(numericConfirm + " for numeric characters");
  alert("Click OK to generate your password!");
  document.getElementById("password").textContent = getRandom()

return
}
if (lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false) {
  alert("Sorry, you have to choose at least one character type.");
}
else {
  alert("You said to Ignore numeric characters")
  console.log(numericConfirm + " for numeric characters");
  alert("Click OK to generate your password!");
  document.getElementById("password").textContent = getRandom()
}

}
else {alert("Your input is invalid.")}








// Function for getting a random element from an array
function getRandom() {
var password = "";
// var upperCasedCharacters = uppercaseConfirm;
// var lowerCasedCharacters = lowercaseConfirm;
// var numericCharacters = numericConfirm;

password += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
password += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
password += numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
while(+lengthPrompt > password.length) {
  password += allChars[Math.floor(Math.random() * allChars.length)];
}

randomPassword.value = password;
}

}

getRandom()


// // Function to generate password with user input
// function generatePassword() {
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions())
