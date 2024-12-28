const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getHumanChoice = () => {
  let choice = prompt('Rock, Paper or Scissors?').toLowerCase();
  const isChoiceInvalid = !['rock', 'paper', 'scissors'].includes(choice);

  while (choice.length === 0 || isChoiceInvalid) {
    choice = prompt('Enter a valid choice. Rock, Paper or Scissors?');
  }

  return choice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  const isHumanRoundWinner =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  if (humanChoice === computerChoice) {
    console.log(`It's a draw! They both played ${humanChoice}.`);
  } else if (isHumanRoundWinner) {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
};
