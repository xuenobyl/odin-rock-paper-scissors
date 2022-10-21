

function getComputerChoice() {    
    let number = Math.floor(Math.random() * 3 + 1);
    switch (number) {
      case 1: return "rock"; break;
      case 2: return "paper"; break;
      case 3: return "scissors";
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


let rounds = 0;
let computerWinCount = 0;
let playerWinCount = 0;
const btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener("click", function(e){ 
        ++ rounds
        const playerSelection = e.target.id;   
        const computerSelection = getComputerChoice();
        console.log("computer: " + computerSelection);
        console.log("player: " + playerSelection); 
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        const body = document.querySelector("body");
        const resultDiv = document.createElement("div");
        resultDiv.textContent = `${result}`;
        body.appendChild(resultDiv);
        if (result === "you lose") {
            computerWinCount ++;
        } else if (result === "you win!") {
            playerWinCount ++;
        }
        if (rounds === 5) {
            endGame()
            rounds = 0;
            computerWinCount = 0;
            playerWinCount = 0;
        }
    });
});



function endGame() {
   
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