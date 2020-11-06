var prompt = require('prompt-sync')();
let n = prompt('Enter the value of n -----> ');
console.log(typeof(n));
n = parseInt(n);
console.log(typeof(n));

switch(n){
    case 1:
        console.log("Hello");
        break;
    case 2:
        console.log("World");
        break;
    default:
        console.log("Not cool");
        break;
}