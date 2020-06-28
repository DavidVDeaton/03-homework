// Character Arrays
var empty = [];

            
// Creates a prompt to ask user how many characters user would like their password to be and confirm which characters to include in password.  
document.getElementById("generateBtn").addEventListener("click", function generatePassword (){

var password = [];

var passLength = prompt( "How many characters would you like your password to contain?" );

    if (passLength < 8) {
       alert( "Password lenth must be at least 8 characters. Try again." );
    }

    else if (passLength > 128) {
       alert( "Password length must be less than 129 characters. Try again." );
    }

    else {
     var confirmSpecial = confirm( "Click OK to include special characters." );
     var confirmNum = confirm( "Click OK to include numeric characters." );
     var confirmLower = confirm( "Click OK to include lowercase characters." );
     var confirmUpper = confirm( "Click OK to include uppercase characters." );
    }

// Based on user response adds appropriate characters to array to draw password from.
    if (confirmSpecial === true) {
        var special = ["~", "!", "@", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}"];
    }

    else {
        var special = empty;
    }

    if (confirmNum === true) {
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    else {
        var num = empty;
    }

    if (confirmLower === true) {
        var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }

    else {
        var lower = empty;
    }

    if (confirmUpper === true) {
        var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }

    else {
        var upper = empty;
    }

    if (confirmSpecial === false && confirmNum === false && confirmLower === false && confirmUpper === false) {        
        alert( "CANNOT CREATE PASSWORD! Please OK at least one group of characters. Try Again." );
        }

    passwordChar = special.concat(num, lower, upper);

//Used to verify code is working properly
    console.log(passwordChar);
    console.log(special);
    console.log(num);
    console.log(lower);
    console.log(upper);

//Based on user response generates random password of the desired length 
        for (i=0; i < passLength ; i++) {

        password.push(passwordChar[Math.floor(Math.random() * passwordChar.length)]);

        }

        document.getElementById("password").innerHTML = password.join(""); 

        console.log(password);

    });

// Copies password to clipboard.
document.getElementById("copyBtn").addEventListener("click", function copyToClipboard (){

var copyPassword = document.getElementById("password");
    
copyPassword.select();

document.execCommand("copy");

alert("Copied the password: " + copyPassword.value);

});
   