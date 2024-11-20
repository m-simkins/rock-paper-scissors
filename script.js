const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.getElementById("choice-buttons");
const resultDisplay = document.getElementById("result-display");
const startButton = document.getElementById("start-button");

function startGame() {
    let humanScore = 0;
    let computerScore = 0;
    resultDisplay.textContent = `human score: ${humanScore} | computer score: ${computerScore}`;
}

startButton.addEventListener('click', startGame);

function getComputerChoice() {
    return Math.floor((Math.random() * 3));
}

function humanWins(humanScore) {
    console.log(`human wins`);
    humanScore++;
    return humanScore;
}

function computerWins(computerScore) {
    console.log(`computer wins`);
    computerScore++;
    return computerScore;
}

function gameTies() {
    console.log(`tie game`);
}

function playRound(humanChoice, humanScore, computerScore) {
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
    let computerChoice = getComputerChoice();

    console.log(`humanChoice = ${choices[humanChoice]}`);

    console.log(`computerChoice = ${choices[computerChoice]}`);

    if (humanChoice === computerChoice) {
        return gameTies();
    }
    
    if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        return humanWins(humanScore);
    }
    
    if (computerChoice === humanChoice + 1 || humanChouce === computerChoice - 2) {
        return computerWins(computerScore);
    }
}

choiceButtons.addEventListener("click", (e) => {
    let humanChoice = Number(e.target.value);
    playGame(humanChoice);
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