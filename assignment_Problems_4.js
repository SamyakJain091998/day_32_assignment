console.log("<----Problem set 4---->")
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');

let localPower = 0;
var localIndex = 1;

while (Math.pow(2, localIndex) <= Math.pow(2, n)) {
    console.log(Math.pow(2, localIndex));
    localIndex += 1;
}

console.log("\n");

//Problem statement 2
console.log("<------Problem statement 2------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');

let harmonicSum = 0;
for (let i = 1; i <= n; i++) {
    harmonicSum += 1 / i;
}
console.log(harmonicSum);

console.log("\n");

//Problem statement 2
console.log("<------Problem statement 2------>")
var prompt = require('prompt-sync')();
var inputNumber = prompt('Enter the value of n -----> ');

function test_prime(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

let isPrime = test_prime(inputNumber);
if (isPrime == true) {
    console.log("Yes! It's a prime number");
} else {
    console.log("No! It's not a prime number");
}


console.log("\n");

//Problem statement 3
console.log("<------Problem statement 3------>")
const args = process.argv.slice(2);
let inputNumber1 = parseInt(args[0]);
let inputNumber2 = parseInt(args[1]);

while (inputNumber1 <= inputNumber2) {
    if (test_prime(inputNumber1) == true) {
        console.log(inputNumber1 + " ");
    }
    inputNumber1++;
}

function test_prime(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log("\n");

//Problem statement 4
console.log("<------Problem statement 4------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');

var factorial = 1;
while (n > 0) {
    factorial *= n;
    n--;
}

console.log(factorial);

console.log("\n");

//Problem statement 5
console.log("<------Problem statement 5------>")
var prompt = require('prompt-sync')();
var n = prompt('Enter the value of n -----> ');
var i;

for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
        console.log(i + "\n");
    }
}

console.log("\n");
