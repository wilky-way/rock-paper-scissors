function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection === "rock") {
        return "computer";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "player";
    }
}
function game(playerSelection) {
    if (playerScore < 5 && cpuScore < 5) {
        // let playerChoice = prompt("Enter Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();

        // Display Choices
        playerChoice.textContent = `Your Choice: ${playerSelection}`;
        cpuChoice.textContent = `CPU Choice: ${computerSelection}`;

        let result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            results.textContent = "You win!";
            playerScore++;
        } else if (result === "computer") {
            results.textContent = "You suck!";
            cpuScore++;
        } else if (result === "tie") {
            results.textContent = "Tie!";
        } else {
            results.textContent = "Invalid choice";
        }
        score.textContent = `You: ${playerScore} CPU: ${cpuScore}`;
    } else if (playerScore === 5) {
        gameOver.textContent = "You win the whole thing";
    } else if (cpuScore === 5) {
        gameOver.textContent = "You lost the whole thing";
    }
}
let playerScore = 0;
let cpuScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerChoice = document.querySelector(".player-choice");
const cpuChoice = document.querySelector(".cpu-choice");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");

rock.addEventListener("click", function () {
    game("rock");
});
paper.addEventListener("click", function () {
    game("paper");
});
scissors.addEventListener("click", function () {
    game("scissors");
});
