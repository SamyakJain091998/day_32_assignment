console.log("<----Problem set 5---->")
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');

let localPower = 0;
while(Math.pow(2, localPower) <= 256 && localPower <= n){
    console.log(Math.pow(2, localPower));
    localPower++;
}

console.log("\n");

//Problem statement 2
console.log("<------Problem statement 2------>")
var prompt = require('prompt-sync')();
var n = prompt('Think of a nunmber between 1 and 100 -----> ');

if (n < 1 || n > 100) {
    console.log("Please enter a valid entry");
    return;
} else {
    let count = 0;
    let guess = prompt("Enter your guess...");
    while (guess != n) {
        guess = prompt("Enter your guess...");
        count++;
        if (guess > n) {
            console.log("Oops! The number is lower than that!");
        } else if (guess < n) {
            console.log("Oops! The number is higher than that!");
        }
    }
    console.log("Congratulations! You guessed it right in " + count + " times.");
}

console.log("\n");


//Problem statement 3
console.log("<------Problem statement 3------>")
console.log("\n");

let headsCount = 0;
let tailsCount = 0;

while (headsCount != 11 && tailsCount != 11) {
    let randomNumber = Math.floor(Math.random() * 10) % 2;
    if (randomNumber == 0) {
        console.log("---heads---");
        headsCount++;
    } else {
        console.log("tails");
        tailsCount++;
    }
}
console.log("\n");

console.log("Final heads count -----> " + headsCount);
console.log("Final tails count -----> " + tailsCount);

console.log("\n");


//Problem statement 3
console.log("<------Problem statement 3------>")
console.log("\n");

let initialMoney = 100;
let currentMoney = initialMoney;

var betAmount = 1;
let goalAmount = 200;
let winCount = 0;
let betCount = 0;

while (currentMoney < goalAmount && currentMoney > 1) {
    let randomToss = Math.floor(Math.random() * 10) % 2;
    betCount += 1;
    if (randomToss == 0) {
        currentMoney -= (betAmount * 1);
    } else {
        currentMoney += (betAmount * 2);
        winCount += 1;
    }
}

console.log("-------" + "Win count is : " + winCount + "-------");

console.log("-------" + "Total number of bets played : " + betCount + "-------");

console.log("-------" + "Current value of money : " + currentMoney + "-------");

if(currentMoney < 1){
    console.log("Oops!! The player lost all the money..");
}else if(currentMoney >= 200){
    console.log("Congratulations! The player reached his goal..");
}