console.log("Hello World");

function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("your choice:");
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            alert("invalid");
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);