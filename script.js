// Character Arrays
var special = ["~", "!", "@", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var all = special.concat(num, lower, upper);
var noSpecial = num.concat(lower, upper);
var noNum = special.concat(lower, upper);
var noLower = special.concat(num, upper);
var noUpper = special.concat(lower, num);
var specialNum = special.concat(num);
var specialLower = special.concat(lower);
var specialUpper = special.concat(upper);
var numLower = num.concat(lower);
var numUpper = num.concat(upper);
var lowerUpper = lower.concat(upper);

            
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

// Based on user response selects appropriate array to draw password from.
    if (confirmSpecial === true && confirmNum === true && confirmLower === true && confirmUpper === true) {        
        var passwordChar = all;
        }

    else if (confirmSpecial === false && confirmNum === true && confirmLower === true && confirmUpper === true) {        
        var passwordChar = noSpecial;
        }
      
    else if (confirmSpecial === true && confirmNum === false && confirmLower === true && confirmUpper === true) {        
        var passwordChar = noNum;
        }

    else if (confirmSpecial === true && confirmNum === true && confirmLower === false && confirmUpper === true) {        
        var passwordChar = noLower;
        }
      
    else if (confirmSpecial === true && confirmNum === true && confirmLower === true && confirmUpper === false) {        
        var passwordChar = noUpper;
        }

    else if (confirmSpecial === true && confirmNum === true && confirmLower === false && confirmUpper === false) {        
        var passwordChar = specialNum;
        }
      
    else if (confirmSpecial === true && confirmNum === false && confirmLower === true && confirmUpper === false) {        
        var passwordChar = specialLower;
        }

    else if (confirmSpecial === true && confirmNum === false && confirmLower === false && confirmUpper === true) {        
        var passwordChar = specialUpper;
        }
      
    else if (confirmSpecial === false && confirmNum === true && confirmLower === true && confirmUpper === false) {        
        var passwordChar = numLower;
        }

    else if (confirmSpecial === false && confirmNum === true && confirmLower === false && confirmUpper === true) {        
        var passwordChar = numUpper;
        }
      
    else if (confirmSpecial === false && confirmNum === false && confirmLower === true && confirmUpper === true) {        
        var passwordChar = lowerUpper;
        }

    else if (confirmSpecial === true && confirmNum === false && confirmLower === false && confirmUpper === false) {        
        var passwordChar = special;
        }
      
    else if (confirmSpecial === false && confirmNum === true && confirmLower === false && confirmUpper === false) {        
        var passwordChar = num;
        }

    else if (confirmSpecial === false && confirmNum === false && confirmLower === true && confirmUpper === false) {        
        var passwordChar = lower;
        }
      
    else if (confirmSpecial === false && confirmNum === false && confirmLower === false && confirmUpper === true) {        
        var passwordChar = upper;
        }

    else if (confirmSpecial === false && confirmNum === false && confirmLower === false && confirmUpper === false) {        
        alert( "CANNOT CREATE PASSWORD! Please OK at least one group of characters. Try Again." );
        }

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
    
console.log(copyPassword);
    
copyPassword.select();

document.execCommand("copy");

alert("Copied the password: " + copyPassword.value);

});
   