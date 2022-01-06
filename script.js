function computerPlay() {
    return Math.floor(Math.random() * 3);
}
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    let player;
    if (playerSelection.toLowerCase() == "rock") {
        player = 0;
    } else if (playerSelection.toLowerCase() == "paper") {
        player = 1;
    } else if (playerSelection.toLowerCase() == "scissors") {
        player = 2;
    }

    if (player === computerSelection) {
        return "tie";
    } else if (player === 0 && computerSelection === 1) {
        return "computer";
    } else if (player === 0 && computerSelection === 2) {
        return "player";
    } else if (player === 1 && computerSelection === 0) {
        return "player";
    } else if (player === 1 && computerSelection === 2) {
        return "computer";
    } else if (player == 2 && computerSelection === 0) {
        return "computer";
    } else if (player == 2 && computerSelection == 1) {
        return "player";
    }
}
function game() {
    let playerScore = 0;
    let cpuScore = 0;
    while (playerScore < 5 && cpuScore < 5) {
        let playerChoice = prompt("Enter Rock, Paper, or Scissors:");
        let result = playRound(playerChoice, computerPlay());

        if (result === "player") {
            console.log("You win!");
            playerScore++;
        } else if (result === "computer") {
            console.log("You suck!");
            cpuScore++;
        } else if (result === "tie") {
            console.log("Tie!");
        } else {
            console.log("Invalid choice");
        }
        console.log(`You: ${playerScore} CPU: ${cpuScore}`);
    }
}

game();
