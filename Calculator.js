//ask the user for the first number
//ask the user for the second number
//ask the user for operation
//perform the operation
//display the result of the operation

const readline = require('readline-sync');

console.log("welcome to the calculator!");

console.log("what is the first number?");
let number1 = readline.question();

console.log("what is the second number?");
let number2 = readline.question();

console.log("what operation would you like to perform?\n1) add 2) subtract 3) multiply 4) divide")
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number1) + Number(number2);
} else if (operation === '2') {
  output = Number(number1) - Number(number2)
} else if (operation === '3') {
  output = Number(number1) * Number(number2)
} else if (operation === '4') {
  output = Number(number1) / Number(number2)
}

console.log(`The result is ${output}.`)
