function getComputerChoice() {
    if (Math.random() < 0.3333) {
        return 'rock';
    }
    else if (Math.random() < 0.6667) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let choice=prompt("Enter your choice: rock, paper, or scissors");
    if (choice.toLocaleLowerCase() !== 'rock' && choice.toLocaleLowerCase() !== 'paper' && choice.toLocaleLowerCase() !== 'scissors') {
        alert("Invalid choice. Try again.");
        return getPlayerChoice();
    }
    return choice.toLowerCase();
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 0;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
             humanChoice === 'paper' && computerChoice === 'rock' ||
             humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 1;
    }
    else {
        computerScore++;
        return 2;
    }
}


function playGame() {
    for (let i = 0; i < 5; i++){
        let humanSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === 1) {
            humanScore++;
        }
        else if (result === 2) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("It's a tie!");
    }
}

console.log(playGame());