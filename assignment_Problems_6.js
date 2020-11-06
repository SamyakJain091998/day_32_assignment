console.log("<----Problem set 6---->")
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
var prompt = require('prompt-sync')();
let inputTemperature;
let conversionSelection;

while (1) {
    console.log("Enter the selection of conversion -----> \n1. degF to degC \n2. degC to degF : \n");
    conversionSelection = prompt("Enter : ");
    conversionSelection = parseInt(conversionSelection);
    switch(conversionSelection){
        case 1:
            while (1) {
                inputTemperature = prompt('Enter the temperature value between 32 degF and 212 degF : ');
                if (inputTemperature < 32 || inputTemperature > 212) {
                    console.log("Enter a valid input!");
                    continue;
                }
                break;
            }
            break;
        case 2:
            while (1) {
                inputTemperature = prompt('Enter the temperature value between 0 degC and 100 degC : ');
                if (inputTemperature < 0 || inputTemperature > 100) {
                    console.log("Enter a valid input!");
                    continue;
                }
                break;
            }
            break;
        default:
            console.log("Enter a valid input!");
            continue;
    }
    break;
    // if (conversionSelection == 1) {
    //     while (1) {
    //         inputTemperature = prompt('Enter the temperature value between 32 degF and 212 degF : ');
    //         if (inputTemperature < 32 || inputTemperature > 212) {
    //             console.log("Enter a valid input!");
    //             continue;
    //         }
    //         break;
    //     }
    //     break;
    // } else if (conversionSelection == 2) {
    //     while (1) {
    //         inputTemperature = prompt('Enter the temperature value between 0 degC and 100 degC : ');
    //         if (inputTemperature < 0 || inputTemperature > 100) {
    //             console.log("Enter a valid input!");
    //             continue;
    //         }
    //         break;
    //     }
    //     break;
    // } else {
    //     console.log("Enter a valid selection");
    //     continue;
    // }
}

if (conversionSelection == 1) {
    let convertedValue = farheneitToCelsiusConverter(inputTemperature);
    console.log("Temperature converted to celsius:");
    console.log("Converted temperature is----> " + convertedValue);
} else if (conversionSelection == 2) {
    let convertedValue = celsiusToFarheneitConverter(inputTemperature);
    console.log("Temperature converted to fehreineit:");
    console.log("Converted temperature is----> " + convertedValue);
} else {
    console.log("Enter a valid input please!");
    return;
}

//Conversion functions
function farheneitToCelsiusConverter(inputVariable) {
    return (inputVariable - 32) * 5 / 9;
}

function celsiusToFarheneitConverter(inputVariable) {
    return (inputVariable * 9 / 5) + 32;
}

console.log("\n");


//Problem statement 2
console.log("<------Problem statement 2------>")
var prompt = require('prompt-sync')();
var n1 = prompt('Enter the value of n1 -----> ');
var n2 = prompt('Enter the value of n2 -----> ');

function palindromeChecker(var1, var2) {
    var localVariable = "";
    while (var1 >= 1) {
        localVariable += (var1 % 10);
        var1 /= 10;
        var1 = parseInt(var1);
    }
    if (parseInt(localVariable) == var2) {
        return true;
    }
}

var result = palindromeChecker(parseInt(n1), parseInt(n2));
if (result == true) {
    console.log("Yes! The two numbers are palindromes...");
} else {
    console.log("Oops! The two numbers are not palindromes...");
}

console.log("\n");

//Problem statement 3
console.log("<------Problem statement 3------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');
n = parseInt(n);
var result = primeNumberChecker(n);
if (result == true) {
    console.log("The input number is a prime number..")
    var result = palindromeChecker(n);
    if (result == true) {
        console.log("The palindrom is also a prime number..")
    } else {
        console.log("Oops! The palindrome is not a prime number..");
    }
} else {
    console.log("The input number is not a palindrome..");
}


function palindromeChecker(var1) {
    var localVariable = "";
    while (var1 >= 1) {
        localVariable += (var1 % 10);
        var1 /= 10;
        var1 = parseInt(var1);
    }
    return (primeNumberChecker(parseInt(localVariable)));
}

function primeNumberChecker(var1) {
    var index = true;
    var halfValue = parseInt(var1 / 2);
    for (var i = 2; i <= halfValue; i++) {
        if (var1 % i == 0) {
            index = false;
        }
    }
    return index;
}