let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
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
    for (i = 0; i < 5; i++){
        playRound();
    };
    if (humanScore > computerScore) {
        console.log(`you won ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`you lost ${humanScore} to ${computerScore}`);
    } else {
        console.log(`you tied... so nobody wins`);
    }
}

playGame();