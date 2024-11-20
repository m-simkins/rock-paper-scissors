const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.getElementById("choice-buttons");
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const resultDisplay = document.getElementById("result-display");
const humanChoiceDisplay = document.getElementById("human-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");

function getComputerChoice() {
    return Math.floor((Math.random() * 3));
}

function updateDisplay(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoiceDisplay.textContent = `you chose ${choices[humanChoice]}`;
    computerChoiceDisplay.textContent = `computer chose ${choices[computerChoice]}`;
    humanScoreDisplay.textContent = `your score: ${humanScore}`;
    computerScoreDisplay.textContent = `computer score: ${computerScore}`;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

}

choiceButtons.addEventListener("click", (e) => {
    let humanChoice = e.target.value;
    playRound(humanChoice);
});


/*function getHumanChoice() {
    let choice = prompt("your choice:");
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("invalid entry, try again");
    } else {
        return choice;
    }
}

function youWin(humanChoice, computerChoice) {
    humanScore++;
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
}

function youLose(humanChoice, computerChoice) {
    computerScore++;
    console.log(`you lose... ${computerChoice} beats ${humanChoice}`)
}

function youTie(humanChoice, computerChoice) {
    console.log(`You can't put ${humanChoice} against ${computerChoice}, try again!`)
}

function playRound() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === "rock") {
        if (computerSelection === "paper") {
            youLose(humanSelection, computerSelection);
        } else if (computerSelection === "scissors") {
            youWin(humanSelection, computerSelection);
        } else {
            youTie(humanSelection, computerSelection);
        }

    } else if (humanSelection === "paper") {
        if (computerSelection === "scissors") {
            youLose(humanSelection, computerSelection);
        } else if (computerSelection === "rock") {
            youWin(humanSelection, computerSelection);
        } else {
            youTie(humanSelection, computerSelection);
        }

    } else if (humanSelection === "scissors") {
        if (computerSelection === "rock") {
            youLose(humanSelection, computerSelection);
        } else if (computerSelection === "paper") {
            youWin(humanSelection, computerSelection);
        } else {
            youTie(humanSelection, computerSelection);
        }
    }
    console.log(`human ${humanSelection} computer ${computerSelection}`)
    console.log(`human ${humanScore} computer ${computerScore}`);
}

function playGame () {
    if (humanScore > computerScore) {
        console.log(`you won ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`you lost ${humanScore} to ${computerScore}`);
    } else {
        console.log(`you tied... so nobody wins`);
    }
}
    */