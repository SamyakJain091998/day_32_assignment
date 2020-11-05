console.log("<---------Hello world!--------->");
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
var localVariable = Math.floor(Math.random() * 10);
console.log(localVariable);
console.log("\n");


//Problem statement 2
console.log("<------Problem statement 2------>")
var localVariable2 = (Math.floor(Math.random() * 10)) %6 + 1;
console.log(localVariable2);
console.log("\n");


//Problem statement 3
console.log("<------Problem statement 3------>")
var diceNumber1 = (Math.floor(Math.random() * 10)) %6 + 1;
var diceNumber2 = (Math.floor(Math.random() * 10)) %6 + 1;
console.log(diceNumber1 + diceNumber2);
console.log("\n");

//Problem statement 4
console.log("<------Problem statement 4------>")
var randomNumber1 = (Math.floor(Math.random() * 90)) + 10;
var randomNumber2 = (Math.floor(Math.random() * 90)) + 10;
var randomNumber3 = (Math.floor(Math.random() * 90)) + 10;
var randomNumber4 = (Math.floor(Math.random() * 90)) + 10;
var randomNumber5 = (Math.floor(Math.random() * 90)) + 10;

let sum = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5;
let average = sum/5;

console.log("Sum of numbers : " + sum + " \nAverage of numbers : " + average);
console.log("\n");

//Problem statement 5
console.log("<------Problem statement 5------>")
let localVar1 = 42;
let inchToFeet = 1/12;
let var1InFt = localVar1 * inchToFeet;
console.log(var1InFt);

let conversionFactorForFeetToMeters = 10.764;
let var1 = 60;
let var2 = 40;

let areaInFeet = var1 * var2;
let areaInMeters = areaInFeet / conversionFactorForFeetToMeters;
console.log("Area in ft. : " + areaInFeet + "\nArea in meters : " + areaInMeters);

let conversionFactorForFeetToAcres = 43560;
let areaOf25SuchPlots = (areaInFeet * 25) / conversionFactorForFeetToAcres;
console.log("Area of 25 such plots in acres : " + areaOf25SuchPlots); 

console.log("\n");
