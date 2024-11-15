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

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("your choice:");
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

console.log(getHumanChoice());