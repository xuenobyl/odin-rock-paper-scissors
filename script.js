

function getComputerChoice() {    
    let number = Math.floor(Math.random() * 2 + 1);
    switch (number) {
      case 0: return "rock"; break;
      case 1: return "paper"; break;
      case 2: return "scissors";
    }   
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "rock":
                return "it's a tie";
                break;
            case "paper":
                return "you lose";
                break;
            case "scissors":
                return "you win!";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "rock":
                return "you win!";
                break;
            case "paper":
                return "it's a tie";
                break;
            case "scissors":
                return "you lose";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "you lose";
                break;
            case "paper":
                return "you win!";
                break;
            case "scissors":
                return "it's a tie";
        }
    }  
}




function game() {
    let computerWinCount = 0;
    let playerWinCount = 0;
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = window.prompt("make your decision");
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "you lose") {
            computerWinCount ++;
        } else if (result === "you win!") {
            playerWinCount += 1;
        }
    }
    console.log("computer: " + computerWinCount);
    console.log("player: " + playerWinCount);
    
    if (computerWinCount === playerWinCount) {
        console.log("it's a tie!!!!!!");
        return "it's a tie";
    } else if (computerWinCount > playerWinCount) {
        console.log("computer wins!!!!!");
        return "computer wins";
    } else if (computerWinCount < playerWinCount) {
        console.log("player wins!!!!!");
        return "player wins";
    }
}