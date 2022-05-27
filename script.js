
//  Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var choiceArray = []



function generatePassword() {
  // create prompt
  var userAnswer = prompt("How many characters would you like your password to contain")
  console.log(userAnswer);
  if (!userAnswer){
    process.exit()
  }
  if (isNaN(userAnswer) || userAnswer < 8 || userAnswer > 128){
    alert("Please enter a valid number between 8 & 128.")
    generatePassword();
  }
  // create first confirm
  specialK= confirm("Click ok to confirm including special characters")
  // create second confirm

  if (specialK) {
  choiceArray = choiceArray.concat(specialChars);
  }
  var numericChar = confirm("Click ok to confirm including numeric characters")

  if (numericChar){
  choiceArray = choiceArray.concat(numberChars);
  };
  var lowerCase = confirm("Click ok to confirm including lowercase characters")

  if (lowerCase) {
  choiceArray = choiceArray.concat(lowercase);
  };
  var upperCase = confirm("Click ok to confirm including uppercase characters")

  if (upperCase) {
  choiceArray = choiceArray.concat(uppercase);
  }

  if (!specialK  && !numericChar && !lowerCase && !upperCase){
    alert("You must pick one option")
    generatePassword();
  }
  // create password generator
  var mixPassword = "";
  for (let i = 0; i < userAnswer; i++) {
    mixPassword += choiceArray[Math.floor(Math.random() * choiceArray.length)];
    
  }  
  return mixPassword

};













var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);