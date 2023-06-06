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


//**** Present a series of prompts for password criteria ****

// Function to prompt user for password options:
function getPasswordOptions() {

  // Initialize password options
  var passwordOptions = {

    // set default length to zero
    length: 0,

    // set default options to false
    hasLowercase: false,
    hasUppercase: false,
    hasNumeric: false,
    hasSpecial: false,
  }

  // Prompt for password length:
  passwordOptions.length = prompt("How many characters would you like your password to contain?");

  //At least 8 characters but no more than 128:
  while (isNaN(passwordOptions.length) || passwordOptions.length < 8 || passwordOptions.length > 129) {
    passwordOptions.length = prompt("ERROR! You must choose a number that is at least 8 characters but no more than 128")
  }

  //character type preferences & hold answers in appropriate object attributes:
  passwordOptions.hasLowercase = confirm("Do you want including with Lower-case Characters?");
  passwordOptions.hasUppercase = confirm("Do you want including with Upper-case Characters?");
  passwordOptions.hasNumeric = confirm("Do you want including with Numeric Characters?");
  passwordOptions.hasSpecial = confirm("Do you want including with Special Characters?");

  //chose at least of the options above and if not ask again:
  while (!Object.values(passwordOptions).some(el => el == true)) {
    alert("ERROR! You must select at least one character type")
    passwordOptions.hasLowercase = confirm("Do you want including with Lower-case Characters?");
    passwordOptions.hasUppercase = confirm("Do you want including with Upper-case Characters?");
    passwordOptions.hasNumeric = confirm("Do you want including with Numeric Characters?");
    passwordOptions.hasSpecial = confirm("Do you want including with Special Characters?");

  }

  // return options object:
  return passwordOptions;
}


// Function for getting a random element from an array:
function getRandom(arr) {
  //getting value from the array of a random index
  var index = Math.floor(Math.random() * arr.length);
  var character = arr[index]
  return character;
}


// Function to generate password with user input:
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password:
  var passwordResult = [];

  //Array to store types of characters:
  var characters = [];

  // Array to contain one of each type of chosen character:
  var mainCharacters = [];


  //getting lower case from user input to passwordCharacters***
  if (options.hasLowercase) {
    characters = characters.concat(lowerCasedCharacters);
    mainCharacters.push(getRandom(lowerCasedCharacters));
  }

  //getting upper case from user input to passwordCharacters***
  if (options.hasUppercase) {
    characters = characters.concat(upperCasedCharacters);
    mainCharacters.push(getRandom(upperCasedCharacters));
  }

  //getting number case from user input to passwordCharacters***
  if (options.hasNumeric) {
    characters = characters.concat(numericCharacters);
    mainCharacters.push(getRandom(numericCharacters));
  }

  //getting number case from user input to specialCharacters***
  if (options.hasSpecial) {
    characters = characters.concat(specialCharacters);
    mainCharacters.push(getRandom(specialCharacters));
  }


  // For loop to iterate over the password length from the options object:
  for (var i = 0; i < options.length; i++) {
    var character = getRandom(characters);

    passwordResult.push(character);
  }

  // Mix atleast one of each main character in the result:
  for (var i = 0; i < mainCharacters.length; i++) {
    passwordResult[i] = mainCharacters[i];
  }

  // Transform the result:
  return passwordResult.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
