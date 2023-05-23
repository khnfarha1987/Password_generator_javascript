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

// Function to prompt user for password options
function getPasswordOptions() {
    // create an object to hold all user choices
    var options = {
        // set default length to zero
        length: 0,
        // set default options to false
        specialCharacters: false,
        numericCharacters: false,
        lowerCaseCharacters: false,
        upperCasedCharacters: false,
    }

    // Ask the user how long they want their password to be & hold the value in the object.length 
    options.length = prompt("How many characters do you want your password to be?");

    // check if given value is a number, which is at least 8 and no bigger than 128
    while (isNaN(options.length) || options.length < 8 || options.length > 129) {
        options.length = prompt("ERROR! You must choose a number that is at least 8 characters but no more than 128")
    }

    // Ask the user about their character type preferences & hold answers in appropriate object attributes 
    options.specialCharacters = confirm("Do you want special characters?");
    options.numericCharacters = confirm("Do you want numeric characters?");
    options.lowerCaseCharacters = confirm("Do you want lower case characters?");
    options.upperCasedCharacters = confirm("Do you want upper case characters?");

    //check if user chose at least of the options above and if not ask again
    while (!Object.values(options).some(el => el == true)) {
        alert("ERROR! You must select at least one character type")
        options.specialCharacters = confirm("Do you want special characters?");
        options.numericCharacters = confirm("Do you want numeric characters?");
        options.lowerCaseCharacters = confirm("Do you want lower case characters?");
        options.upperCasedCharacters = confirm("Do you want upper case characters?");
    }

    // return options object with all user preferences set up
    return options;

}

// Function for getting a random element from an array
function getRandom(arr) {
    var character;
    // get a value from the array of a random index
    character = arr[Math.floor(Math.random() * arr.length)];

    //return random character from given array
    return character;
}

// Function to generate password with user input
function generatePassword() {
    // receive user password choices
    var options = getPasswordOptions();
    //initialise array to add random values that will become the password
    var password = [];


    //keep adding characters to the password until it reaches the length of user's choice
    while (password.length < options.length) {

        //check if the password length hasn't been achieved yet
        if (password.length < options.length) {
            //add a numeric character if user chose to have it
            if (options.numericCharacters) {
                password.push(getRandom(numericCharacters));
            }
        } else {
            break
        }

        //check if the password length hasn't been achieved yet
        if (password.length < options.length) {
            //add a special character if user chose to have it
            if (options.specialCharacters) {
                password.push(getRandom(specialCharacters));
            }
        } else {
            break
        }

        //check if the password length hasn't been achieved yet
        if (password.length < options.length) {
            //add a lower case character if user chose to have it
            if (options.lowerCaseCharacters) {
                password.push(getRandom(lowerCasedCharacters));
            }
        } else {
            break
        }
        //check if the password length hasn't been achieved yet
        if (password.length < options.length) {
            //add an upper case character if user chose to have it
            if (options.upperCasedCharacters) {
                password.push(getRandom(upperCasedCharacters));
            }
        } else {
            break;
        }

    }

    //turn the password array into a string
    password = password.join("");

    //Testing purposes - print length given by user and the generated password length
    //console.log(options.length);
    //console.log(password.length);
    //return the password, ready to be presented to user
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