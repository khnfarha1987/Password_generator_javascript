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
    length: 0,
    hasLowercase: false,
    hasUppercase: false,
    hasNumeric: false,
    hasSpecial: false,
    lowercaseChars: [],
    uppercaseChars: [],
    numericChars: [],
    specialChars: []
  };
  // Prompt for password length:
  var passwordLength = parseInt(prompt("Enter password length (8-128):"));

  //At least 8 characters but no more than 128
  if (passwordLength >= 8 || passwordLength <= 128) {
    passwordOptions.length = passwordLength;
  }
  // Prompt for character types:
  passwordOptions.lowercaseChars = prompt("Enter lower case characters!");
  passwordOptions.uppercaseChars = prompt("Enter upper case characters!");
  passwordOptions.numericChars = prompt("Enter numeric characters!");
  passwordOptions.specialChars = prompt("Enter special characters!");
  //checking lower character present in the array
  for (var i = 0; i < lowerCasedCharacters.length; i++) {
    if (passwordOptions.lowercaseChars.includes(lowerCasedCharacters[i])) {
      passwordOptions.hasLowercase = true;
      break;
    }
  }
  //checking upper character present in the array
  for (var i = 0; i < upperCasedCharacters.length; i++) {
    if (passwordOptions.uppercaseChars.includes(upperCasedCharacters[i])) {
      passwordOptions.hasUppercase = true;
      break;
    }
  }
  //checking number character present in the array
  for (var i = 0; i < numericCharacters.length; i++) {
    if (passwordOptions.numericChars.includes(numericCharacters[i])) {
      passwordOptions.hasNumeric = true;
      break;
    }
  }
  //checking special character in the array
  for (var i = 0; i < specialCharacters.length; i++) {
    if (passwordOptions.specialChars.includes(specialCharacters[i])) {
      passwordOptions.hasSpecial = true;
      break;
    }
  }

  // Return password options
  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Initialize password characters
  var passwordCharacters = [];
  //getting lower case from user input to passwordCharacters
  if (options.hasLowercase) {
    for (var i = 0; i < options.lowercaseChars.length; i++) {
      passwordCharacters = passwordCharacters.concat(options.lowercaseChars[i]);
    }
  }
  ////getting upper case from user input to passwordCharacters
  if (options.hasUppercase) {
    for (var i = 0; i < options.uppercaseChars.length; i++) {
      passwordCharacters = passwordCharacters.concat(options.uppercaseChars[i]);
    }
  }
  ////getting number case from user input to passwordCharacters
  if (options.hasNumeric) {
    for (var i = 0; i < options.numericChars.length; i++) {
      passwordCharacters = passwordCharacters.concat(options.numericChars[i]);
    }
  }
  ////getting special case from user input to passwordCharacters
  if (options.hasSpecial) {
    for (var i = 0; i < options.specialChars.length; i++) {
      passwordCharacters = passwordCharacters.concat(options.specialChars[i]);
    }
  }
  // Generate password
  var password;
  var lowerCasePresent;
  var upperCasePresent;
  var numericPresent;
  var specialCharPresent;

  //looping to generate password with required specification
  do {
    password = ""
    lowerCasePresent = false;
    upperCasePresent = false;
    numericPresent = false;
    specialCharPresent = false;
    for (var i = 0; i < options.length; i++) {
      password += getRandom(passwordCharacters);
    }
    for (var i = 0; i < password.length; i++) {
      if (lowerCasedCharacters.includes(password[i])) {
        lowerCasePresent = true;
      }
      if (upperCasedCharacters.includes(password[i])) {
        upperCasePresent = true;
      }
      if (numericCharacters.includes(password[i])) {
        numericPresent = true;
      }
      if (specialCharacters.includes(password[i])) {
        specialCharPresent = true;
      }
    }

  } while (!lowerCasePresent || !upperCasePresent || !numericPresent || !specialCharPresent);

  // Return password
  return password;


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