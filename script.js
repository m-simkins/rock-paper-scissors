const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.getElementById("choice-buttons");
const resultDisplay = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let gameResult;

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");

playerScoreDisplay.textContent = `${playerScore}`
computerScoreDisplay.textContent = `${computerScore}`

choiceButtons.addEventListener("click", (e) => {
    playerChoice = Number(e.target.value);
    computerChoice = Math.floor((Math.random() * 3));
    
    playerChoiceDisplay.textContent = `you choose ${choices[playerChoice]}`
    
    computerChoiceDisplay.textContent = `the computer chooses ${choices[computerChoice]}`
        
    if (playerChoice === computerChoice) {
        gameResult = 'tie';
    } else if (playerChoice === computerChoice + 1 || playerChoice === computerChoice - 2) {
        gameResult = 'win';
        playerScore++;
    } else {
        gameResult = 'lose';
        computerScore++;
    }

    gameResultDisplay.textContent = `you ${gameResult} this round`;

    playerScoreDisplay.textContent = `${playerScore}`;

    computerScoreDisplay.textContent = `${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            gameResultDisplay.textContent = `you win the game`
        } else if (computerScore === 5) {
            gameResultDisplay.textContent = `you lose the game`
        }
    }
});