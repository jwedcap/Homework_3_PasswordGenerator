// Assignment Code
var generateBtn = document.querySelector("#generate");

//Varibles to PROMPT length, CONFIRM password character types, and generate characters from the strings
var lengthprompt;
var lengthalert;
var length = lengthprompt;
var lowercase;
var uppercase;
var numbers;
var special;
var low = "abcdefghijklmnopqrstuvwxyz";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spec = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var passwordcharacters = "";

//Password Function
function generatePassword(){

  //PROMPT User for Number between 8-128
  lengthprompt = prompt("How many character would you like the password to be? (Between 8-128)");
  lengthalert = alert("You've chosen a length of " + lengthprompt);

  //statement if number is valid
  
  //CONFIRM Character Characteristics
  lowercase = confirm("Would you like to have lowercase letters?");
  uppercase = confirm("Would you like to have UPPERCASE letters?");
  numbers = confirm("Would you like to have Numbers? (1,2,3,4,5)");
  special = confirm("Would you like to have Special Characters? (!, @, #, $, %)");

  //Statements for all CONFIRM combinations
  if (lowercase && uppercase && numbers && special) {
    passwordcharacters = low + up + num + spec;
  }
  else if (lowercase && uppercase && numbers){
    passwordcharacters = low + up + num;
  }
  else if (lowercase && uppercase && special){
    passwordcharacters = low + up + spec;
  }
  else if (lowercase && numbers && special){
    passwordcharacters = low + num + spec;
  }
  else if (uppercase && numbers && special){
    passwordcharacters = up + num + spec;
  }
  else if (lowercase && uppercase){
    passwordcharacters = low + up;
  }
  else if (lowercase && numbers){
    passwordcharacters = low + num;
  }
  else if (lowercase && special){
    passwordcharacters = low + spec;
  }
  else if (uppercase && numbers){
    passwordcharacters = up + num;
  }
  else if (uppercase && special){
    passwordcharacters = up + spec;
  }
  else if (numbers && special){
    passwordcharacters = num + spec;
  }
  else if (lowercase) {
    passwordcharacters = low;
  }
  else if (uppercase) {
    passwordcharacters = up;
  }
  else if (numbers) {
    passwordcharacters = num;
  }
  else if (special) {
    passwordcharacters = spec;
  }

  //For statement to randomize characters into password varible
  var password = " ";
  
  for (var i = 0; i < lengthprompt; i++) {
    password += passwordcharacters[Math.floor(Math.random() * passwordcharacters.length)] 
  }
  return (password);
}

// Write password to the #password ID
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
