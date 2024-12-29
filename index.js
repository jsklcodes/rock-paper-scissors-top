const choiceButtons = document.querySelectorAll('[data-choice]');
const gameText = document.querySelector('#game-text');
const gameScore = document.querySelector('#game-score');

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

choiceButtons.forEach(choiceButton =>
  choiceButton.addEventListener('click', event => {
    const humanSelection = event.target.dataset.choice;
    const computerSelection = getComputerChoice();

    rounds++;

    playRound(humanSelection, computerSelection);

    if (rounds >= 5) {
      choiceButtons.forEach(choiceButton => (choiceButton.disabled = true));
      getGameResult(humanScore, computerScore);
      showRestartButton();
    }
  })
);

const showRestartButton = () => {
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Game';
  restartButton.onclick = restartGame;
  document.body.insertAdjacentElement('beforeend', restartButton);
};

const restartGame = event => {
  humanScore = 0;
  computerScore = 0;
  rounds = 0;
  gameText.textContent = '';
  gameScore.textContent = '';
  choiceButtons.forEach(choiceButton => (choiceButton.disabled = false));
  event.target.remove();
};

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getHumanChoice = () => {
  let choice = prompt('Rock, Paper or Scissors?').toLowerCase();
  const isChoiceInvalid = !['rock', 'paper', 'scissors'].includes(choice);

  if (choice.length === 0 || isChoiceInvalid) {
    choice = prompt('Enter a valid choice. Rock, Paper or Scissors?');
  }

  return choice;
};

const getGameResult = (humanScore, computerScore) => {
  let resultMessage;

  if (humanScore === computerScore) {
    resultMessage = 'The game ended in a draw!';
  } else if (humanScore > computerScore) {
    resultMessage = "Congratulations! You've won the game!";
  } else {
    resultMessage = "Oh, no... You've lost the game!";
  }

  console.log('Game over!');
  console.log(resultMessage);
  console.log(`${humanScore} x ${computerScore}`);
};

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
