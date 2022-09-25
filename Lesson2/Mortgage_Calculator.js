//var/consts & Functions
const RL = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg} `);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

//Welcome Message and get Loan info
prompt("Welcome to Mortgage Calculator!");

while(true){

prompt("Please enter a your loan ammount")
let amount = RL.question();
while (isInvalidNumber(amount)) {
  prompt("Must enter a positive number");
  amount = RL.question();
}


prompt("Please enter the intrest rate")
let intrestRate = RL.question();
while (isInvalidNumber(intrestRate)) {
  prompt("Must enter a positive number");
  intrestRate = RL.question();
}

prompt("Enter the number of years")
let years = RL.question();
while (isInvalidNumber(years)) {
  prompt("Must enter a positive number");
  years = RL.question();
}
//Calculate mothly payment

let annualIntrestRate = Number(intrestRate) / 100;
let monthlyIntrestRate = annualIntrestRate / 12;
let months = Number(years) * 12;

let monthlyPayment = Number(amount) *
                   (monthlyIntrestRate /
                   (1 - Math.pow((1 + monthlyIntrestRate), (-Number(months) ))));

//Tell user their monthly payment and ask for another calculation

prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

prompt("Another calculation?");
let answer = RL.question().toLowerCase();
while (answer[0] !== "n" && answer[0] !== "y"){
  prompt('Please enter "y" or "n".')
  answer = RL.question().toLowerCase();
}

if (answer[0] === "n")
break;
}
