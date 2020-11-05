console.log("<----Problem set 2---->")
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
var randomNumber1 = (Math.floor(Math.random() * 900)) + 100;
var randomNumber2 = (Math.floor(Math.random() * 900)) + 100;
var randomNumber3 = (Math.floor(Math.random() * 900)) + 100;
var randomNumber4 = (Math.floor(Math.random() * 900)) + 100;
var randomNumber5 = (Math.floor(Math.random() * 900)) + 100;

let mininumNumber = 1000;
if(randomNumber1 < mininumNumber){
    mininumNumber = randomNumber1;
}

if(randomNumber2 < mininumNumber){
    mininumNumber = randomNumber2;
}

if(randomNumber3 < mininumNumber){
    mininumNumber = randomNumber3;
}

if(randomNumber4 < mininumNumber){
    mininumNumber = randomNumber4;
}

if(randomNumber5 < mininumNumber){
    mininumNumber = randomNumber5;
}

console.log("\nMinimum number is : " + mininumNumber);

let maximumNumber = 99;
if (randomNumber1 > maximumNumber) {
    maximumNumber = randomNumber1;
}

if (randomNumber2 > maximumNumber) {
    maximumNumber = randomNumber2;
}

if (randomNumber3 > maximumNumber) {
    maximumNumber = randomNumber3;
}

if (randomNumber4 > maximumNumber) {
    maximumNumber = randomNumber4;
}

if (randomNumber5 > maximumNumber) {
    maximumNumber = randomNumber5;
}

console.log("\nMaximum number is : " + maximumNumber);

//Problem statement 2
console.log("\n<------Problem statement 2------>\n")

let day = 9;
let month = "April";

if (month.toLocaleLowerCase() == "march") {
    if (day >= 20 && day <= 31) {
        console.log(true);
    }
} else if (month.toLocaleLowerCase() == "april") {
    if (day >= 1 && day <= 30) {
        console.log(true);
    }
} else if (month.toLocaleLowerCase() == "may") {
    if (day >= 1 && day <= 31) {
        console.log(true);
    }
} else if (month.toLocaleLowerCase() == "june") {
    if (day >= 1 && day <= 20) {
        console.log(true);
    }
} else {
    console.log(false);
}

console.log("\n");

//Problem statement 3
console.log("\n<------Problem statement 3------>\n")

let year = 2017;
let countLengthOfYear = year;
let lengthOfYear = 0;

while (countLengthOfYear > 1) {
    countLengthOfYear /= 10;
    lengthOfYear++;
}

if (lengthOfYear == 4) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Its a leap year!");
            return;
        } else {
            console.log("Oops! It's not a leap year..")
            return;
        }
    }
    if (year % 4 == 0) {
        console.log("Its a leap year!");
        return;
    }
    console.log("Oops! It's not a leap year..")
    return;
}



//Problem statement 4
console.log("\n<------Problem statement 4------>\n")
var randomFlipVariable = (Math.floor(Math.random() * 10)) % 2;

if(randomFlipVariable == 0){
    console.log("Tails");
}else{
    console.log("heads");
}
console.log("\n");


//Problem statement 5
console.log("\n<------Problem statement 5------>\n")

const args = process.argv.slice(2);
let singleDigitNumber = parseInt(args[0]);

if (singleDigitNumber == 0) {
    console.log("Zero");
    return;
}
if (singleDigitNumber == 1) {
    console.log("One");
    return;
}
if (singleDigitNumber == 2) {
    console.log("Two");
    return;
}
if (singleDigitNumber == 3) {
    console.log("Three");
    return;
}
if (singleDigitNumber == 4) {
    console.log("Four");
    return;
}
if (singleDigitNumber == 5) {
    console.log("Five");
    return;
}
if (singleDigitNumber == 6) {
    console.log("Six");
    return;
}
if (singleDigitNumber == 7) {
    console.log("Seven");
    return;
}
if (singleDigitNumber == 8) {
    console.log("Eight");
    return;
}
if (singleDigitNumber == 9) {
    console.log("Nine");
    return;
}else{
    console.log("\nEnter a valid single digit number!");
    return;
}

console.log("\n");


//Problem statement 6
console.log("\n<------Problem statement 6------>\n")

const args = process.argv.slice(2);
let inputNumber = parseInt(args[0]);

if (inputNumber == 0) {
    console.log("Sunday");
    return;
} if (inputNumber == 1) {
    console.log("Monday");
    return;
} if (inputNumber == 2) {
    console.log("Tuesday");
    return;
} if (inputNumber == 3) {
    console.log("Wednesday");
    return;
} if (inputNumber == 4) {
    console.log("Thursday");
    return;
} if (inputNumber == 5) {
    console.log("Friday");
    return;
} if (inputNumber == 6) {
    console.log("Saturday");
    return;
}else{
    console.log("Enter a valid input from 0-6");
    return;
}

console.log("\n");


//Problem statement 7
console.log("\n<------Problem statement 7------>\n")

const args = process.argv.slice(2);
let inputNumber = parseInt(args[0]);

if(inputNumber == 1){
    console.log("unit");
    return;
}
else if(inputNumber == 10){
    console.log("ten");
    return;
}
else if(inputNumber == 100){
    console.log("hundred");
    return;
}
else if(inputNumber == 1000){
    console.log("thousand");
    return;
}
else{
    console.log("Enter a valid input");
    return;
}
console.log("\n");

//Problem statement 8
console.log("\n<------Problem statement 8------>\n")

const args = process.argv.slice(2);
let inputNumber1 = parseInt(args[0]);
let inputNumber2 = parseInt(args[1]);
let inputNumber3 = parseInt(args[2]);

let operation1 = inputNumber1 + inputNumber2 * inputNumber3;
let operation2 = inputNumber3 + inputNumber1 / inputNumber2;
let operation3 = inputNumber1 % inputNumber2 + inputNumber3;
let operation4 = inputNumber1 * inputNumber2 + inputNumber3;

console.log("Operation 1 : " + operation1);
console.log("Operation 2 : " + operation2);
console.log("Operation 3 : " + operation3);
console.log("Operation 4 : " + operation4);


