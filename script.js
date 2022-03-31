
//  Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




function userOption() {
  var message = prompt("How many characters would you like your password to contain")
  var length = parseInt(message)
  if (isNaN(length)) {
    alert("This is not a number, Please type a number. ")
    
  }
  if (length < 8 || length >128) {
    alert("password needs to be between the number 8 & 128.")
    userOption()
  }

  var passLower = confirm("Click ok to conform including lowercase character")
  
  if (passLower) {

  }
  
  var passWordup = confirm("Click ok to conform including uppercase character")

  if (passWordup) {

  }

  var specialChar = confirm("Click ok to conform including special characters ")

  if (specialChar) {

  }

  var number = confirm("Click ok to conform including numerical characters")

  if (number){

  }
  }


// prompt the user for the password criteria
// password lenght 8 < 128


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//   function generatePassword(){
//   userOption()
//  }
