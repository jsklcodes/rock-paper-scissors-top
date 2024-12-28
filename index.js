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
