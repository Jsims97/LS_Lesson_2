//ask the user for the first number;
//ask the user for the second number;
//ask the user for operation;
//perform the operation;
//display the result of the operation;
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function prompt(msg) {
  console.log(`=> ${msg} `);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);
let name = readline.question();

while (true) {

prompt("what is the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("that dosent look like a valid number.")
  number1 = readline.question();
}

prompt("what is the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("that dosent look like a valid number.")
  number2 = readline.question();
}


prompt("what operation would you like to perform?\n1) add 2) subtract 3) multiply 4) divide")
let operation = readline.question();
while (!['1','2','3','4'].includes(operation)) {
  prompt("Must Choose 1,2,3,or 4")
  operation = readline.question();
}

let output;

switch(operation) {
  case '1':
    output = Number(number1) + Number(number2)
    break;
  case '2':
    output = Number(number1) - Number(number2)
    break;
  case '3':
    output = Number(number1) * Number(number2)
    break;
  case '4':
    output = Number(number1) / Number(number2)
    break;
}


prompt(`The result is ${output}.`)

//ask user for another calculation

prompt(`Would you like to perform another calculation ${name}? (y/n)`)
let answer = readline.question();

if (answer !== 'y') break;
}
