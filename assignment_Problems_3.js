console.log("<----Problem set 3---->")
console.log("\n");

//Problem statement 1
console.log("<------Problem statement 1------>")
const args = process.argv.slice(2);
let inputNumber1 = parseInt(args[0]);

switch (inputNumber1) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Enter a valid input!");
        break;
}

console.log("\n");

//Problem statement 2
console.log("<------Problem statement 2------>")
const args = process.argv.slice(2);
let inputNumber1 = parseInt(args[0]);
switch (inputNumber1) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid input");
        break;
}
console.log("\n");


//Problem statement 3
console.log("<------Problem statement 3------>")
const args = process.argv.slice(2);
let inputNumber1 = parseInt(args[0]);
switch (inputNumber1) {
    case 1:
        console.log("unit");
        break;
    case 10:
        console.log("ten");
        break;
    case 100:
        console.log("hundred");
        break;
    case 1000:
        console.log("thousand");
        break;
    default:
        console.log("Enter a valid input");
        break;
}
console.log("\n");

