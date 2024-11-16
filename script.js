console.log("Hello World");

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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        } else if (computerChoice === "scissors") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        } else {
            console.log(`You can't put ${humanChoice} against ${computerChoice}, try again!`)
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        } else if (computerChoice === "rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        } else {
            console.log(`You can't put ${humanChoice} against ${computerChoice}, try again!`)
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        } else if (computerChoice === "paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        } else {
            console.log(`You can't put ${humanChoice} against ${computerChoice}, try again!`)
        }
    }
}

playRound();