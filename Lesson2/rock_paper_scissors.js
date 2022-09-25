// Functions & values
const RL = require('readline-sync');

validChoices = ['rock', 'paper', 'scissors'];

function displayWinner(userAnswer,computerAnswer){
  prompt(`You chose ${userAnswer}. The computer chose ${computerAnswer}`)

  if ((userAnswer === 'rock' && computerAnswer === 'scissors') ||
      (userAnswer === 'scissors' &&  computerAnswer === 'paper') ||
      (userAnswer === 'paper' && computerAnswer === 'rock')) {
        prompt('You beat Jordan!');
      } else if ((userAnswer === 'rock' && computerAnswer === 'paper') ||
                (userAnswer === 'paper' && computerAnswer === 'scissors') ||
                (userAnswer === 'scissors' && computerAnswer === 'rock')){
        prompt('Jordan beat you!');
      } else {
        prompt('Its a tie!');
      }
}

function prompt(msg){
  console.log(`=>${msg}`);
}


//Run Program
while (true) {

//Welcome message and get input for users answer
prompt(`Welcome to Jordan's ${validChoices.join(', ')}!\nPlease choose: \nrock , paper, or scissors`);
let userAnswer = RL.question().toLowerCase();

// if users input is not a valid input retry the question
while (!['rock' , 'paper' , 'scissors'].includes(userAnswer)) {
  prompt(`Please choose: \nRock , Paper, or Scissors`);
  userAnswer = RL.question();

}

// Get computers answer
let randomIndex = Math.floor(Math.random() * validChoices.length);
let computerAnswer = validChoices[randomIndex]

//Tell user the results of the game
displayWinner(userAnswer, computerAnswer);
//Ask user if they would like to play again
prompt("Would you like to play again? \ny/n")

let answer = RL.question().toLowerCase();
while (answer[0] !== 'y' && answer[0] !== 'n') {
  prompt('please enter y or n')
  answer = RL.question().toLowerCase()
}

if (answer[0] !== 'y') break;
}
//End of Program
