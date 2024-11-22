const choices = ["rock", "paper", "scissors"];
const choiceButtonGroup = document.querySelector("#choice-button-group");
const choiceButtons = choiceButtonGroup.children;
const resultDisplay = document.querySelector("#result-display");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");

let playerScore;
let computerScore;

function setButtons(buttonText) {
    for (i = 0; i < choiceButtonGroup.children.length; i++) {
        choiceButtons[i].textContent = `${buttonText}`;
        choiceButtons[i].classList.toggle("starting");
    }
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    
    for (i = 0; i < choiceButtonGroup.children.length; i++) {
        const choice = choices[i].valueOf();
        choiceButtons[i].textContent = `${choice}`;
        choiceButtons[i].classList.remove("starting");

        playerScoreDisplay.textContent = `${playerScore}`
        computerScoreDisplay.textContent = `${computerScore}`
    }
}

startGame();

function playRound(e) {
    let playerChoice = Number(e.target.value);
    let computerChoice = Math.floor((Math.random() * 3));
    let roundResult;

    if (playerChoice === computerChoice) {
        roundResult = 'tie';
    } else if (playerChoice === computerChoice + 1 || playerChoice === computerChoice - 2) {
        roundResult = 'win';
        playerScore++;
    } else {
        roundResult = 'lose';
        computerScore++;
    }

    displayResults(playerChoice, computerChoice, roundResult, playerScore, computerScore);

    if (playerScore === 5 || computerScore === 5) {
        endGame(playerScore, computerScore);
    }
}

function displayResults(playerChoice, computerChoice, roundResult, playerScore, computerScore) {
    playerChoiceDisplay.textContent = `${choices[playerChoice]}`
    
    computerChoiceDisplay.textContent = `${choices[computerChoice]}`

    resultDisplay.textContent = `you ${roundResult} this round`;

    playerScoreDisplay.textContent = `${playerScore}`;

    computerScoreDisplay.textContent = `${computerScore}`;
}

function endGame(playerScore, computerScore) {
    if (playerScore === 5) {
        resultDisplay.textContent = `you win the game`
    } else if (computerScore === 5) {
        resultDisplay.textContent = `you lose the game`
    }

    setButtons('play game');
}

choiceButtonGroup.addEventListener("click", (e) => {
    if (e.target.className === "starting") {
        startGame();
    } else {
        playRound(e);
    }
});