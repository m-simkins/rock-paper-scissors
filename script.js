const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.getElementById("choice-buttons");
const resultDisplay = document.getElementById("result-display");

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let result;

document.getElementById("human-score").textContent = `human score: ${humanScore}`

document.getElementById("computer-score").textContent = `computer score: ${computerScore}`

choiceButtons.addEventListener("click", (e) => {
    humanChoice = Number(e.target.value);
    computerChoice = Math.floor((Math.random() * 3));
    
    document.getElementById("human-choice").textContent = `human choice: ${choices[humanChoice]}`
    
    document.getElementById("computer-choice").textContent = `computer choice: ${choices[computerChoice]}`
    
    let roundResult;
    
    if (humanChoice === computerChoice) {
        roundResult = 'tie';
    } else if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        roundResult = 'win';
        humanScore++;
    } else {
        roundResult = 'lose';
        computerScore++;
    }

    document.getElementById("round-result").textContent = `you ${roundResult} this round`;

    document.getElementById("human-score").textContent = `human score: ${humanScore}`;

    document.getElementById("computer-score").textContent = `computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            document.getElementById("game-result").textContent = `you win the game`
        } else if (computerScore === 5) {
            document.getElementById("game-result").textContent = `you lose the game`
        }
    }
});
