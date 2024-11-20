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
    let roundResult;
    
    document.getElementById("human-choice").textContent = `human choice: ${choices[humanChoice]}`

    document.getElementById("computer-choice").textContent = `computer choice: ${choices[computerChoice]}`

    if (humanChoice === computerChoice) {
        roundResult = 'you tie';
    } else if (humanChoice === computerChoice + 1 || humanChoice === computerChoice - 2) {
        roundResult = 'you win!';
        humanScore++;
    } else {
        roundResult = 'you lose :C';
        computerScore++;
    }

    document.getElementById("round-result").textContent = `${roundResult}`;

    document.getElementById("human-score").textContent = `human score: ${humanScore}`;

    document.getElementById("computer-score").textContent = `computer score: ${computerScore}`;

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