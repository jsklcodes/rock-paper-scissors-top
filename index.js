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
  if (humanScore === computerScore) {
    gameText.textContent = 'The game ended in a draw!';
  } else if (humanScore > computerScore) {
    gameText.textContent = "Congratulations! You've won the game!";
  } else {
    gameText.textContent = "Oh, no... You've lost the game!";
  }
};

const getGameScore = (humanScore, computerScore) =>
  (gameScore.textContent = `${humanScore} x ${computerScore}`);

const playRound = (humanChoice, computerChoice) => {
  const isHumanRoundWinner =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  if (humanChoice === computerChoice) {
    gameText.textContent = `It's a draw! They both played ${humanChoice}.`;
    getGameScore(humanScore, computerScore);
  } else if (isHumanRoundWinner) {
    humanScore++;
    gameText.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
    getGameScore(humanScore, computerScore);
  } else {
    computerScore++;
    gameText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    getGameScore(humanScore, computerScore);
  }
};
