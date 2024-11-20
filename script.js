const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.getElementById("choice-buttons");
const resultDisplay = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let gameResult;

const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const humanChoiceDisplay = document.getElementById("human-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");

humanScoreDisplay.textContent = `human score: ${humanScore}`
computerScoreDisplay.textContent = `computer score: ${computerScore}`

choiceButtons.addEventListener("click", (e) => {
    humanChoice = Number(e.target.value);
    computerChoice = Math.floor((Math.random() * 3));
    
    humanChoiceDisplay.textContent = `you choose ${choices[humanChoice]}`
    
    computerChoiceDisplay.textContent = `the computer chooses ${choices[computerChoice]}`
        
    if (humanChoice === computerChoice) {
        gameResult = 'tie';
    } else if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        gameResult = 'win';
        humanScore++;
    } else {
        gameResult = 'lose';
        computerScore++;
    }

    gameResultDisplay.textContent = `you ${gameResult} this round`;

    humanScoreDisplay.textContent = `human score: ${humanScore}`;

    computerScoreDisplay.textContent = `computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            gameResultDisplay.textContent = `you win the game`
        } else if (computerScore === 5) {
            gameResultDisplay.textContent = `you lose the game`
        }
    }
});