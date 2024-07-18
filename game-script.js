const gameChoices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playRound(playerSelection, computerPlay) {
    if (playerSelection === computerPlay) {
        return "It's a tie!";
    } else if ((playerSelection === 'rock' && computerPlay === 'scissors') ||
               (playerSelection === 'paper' && computerPlay === 'rock') ||
               (playerSelection === 'scissors' && computerPlay === 'paper')) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerPlay}`;
    } else {
        computerScore++;
        return `You lose! ${computerPlay} beats ${playerSelection}`;
    }
}

function updateScoreBoard() {
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');
    userScoreElement.textContent = `User wins: ${playerScore}`;
    computerScoreElement.textContent = `Computer wins: ${computerScore}`;
}

function displayResultMessage(message) {
    const resultElement = document.getElementById('result-message');
    resultElement.textContent = message;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScoreBoard();
}

function handleButtonClick(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayResultMessage(result);
    updateScoreBoard();

    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            displayResultMessage('You win the game!');
        } else if (playerScore < computerScore) {
            displayResultMessage('You lose the game!');
        } else {
            displayResultMessage('It\'s a tie!');
        }

        resetScore();
    }
}

document.getElementById('rock-button').addEventListener('click', () => handleButtonClick('rock'));
document.getElementById('paper-button').addEventListener('click', () => handleButtonClick('paper'));
document.getElementById('scissors-button').addEventListener('click', () => handleButtonClick('scissors'));
