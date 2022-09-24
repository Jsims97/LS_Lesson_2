// Functions
// Welcome Message
// Get user input
// Get computer input
// Produce outcome

const RL = require('readline-sync');



validChoices = ['Rock', 'Paper', 'Scissors'];

function prompt(msg){
  console.log(`=>${msg}`);
}

prompt(`Welcome to Jordan's ${validChoices.join(', ')}!\nPlease choose: \nRock , Paper, or Scissors`);
let userAnswer = RL.question();

while (!['Rock' , 'Paper' , 'Scissors'].includes(userAnswer)) {
  prompt(`Please choose: \nRock , Paper, or Scissors`);
  userAnswer = RL.question();

}

let randomIndex = Math.floor(Math.random() * validChoices.length);
let computerAnswer = validChoices[randomIndex]


prompt(`You chose ${userAnswer}. The computer chose ${computerAnswer}`)

if ((userAnswer === 'Rock' && computerAnswer === 'Scissors') ||
    (userAnswer === 'Scissors' &&  computerAnswer === 'Paper') ||
    (userAnswer === 'Paper' && computerAnswer === 'Rock')) {
      prompt('You beat Jordan!');
    } else if ((userAnswer === 'Rock' && computerAnswer === 'Paper') ||
              (userAnswer === 'Paper' && computerAnswer === 'Scissors') ||
              (userAnswer === 'Scissors' && computerAnswer === 'Rock')){
      prompt('Jordan beat you!');
    } else {
      prompt('Its a tie!');
    }
