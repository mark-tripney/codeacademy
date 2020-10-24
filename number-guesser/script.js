let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (humanDistance, computerDistance) =>
  humanDistance <= computerDistance;

const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9) {
    alert('Please enter a number between 0 and 9!');
  }
  const humanDistance = Math.abs(target - human);
  const computerDistance = Math.abs(target - computer);
  return getAbsoluteDistance(humanDistance, computerDistance);
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
