function getComputerChoice() {    
    const number = Math.floor(Math.random() * 3 + 1);
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

function getWinnerOfFiveRounds() {
    console.log("computer: " + computerWinCount);
    console.log("player: " + playerWinCount);

    if (computerWinCount === playerWinCount) {
        return "it's a tie!!!!!";
    } else if (computerWinCount > playerWinCount) {
        return "computer wins!!!!!";
    } else if (computerWinCount < playerWinCount) {
        return "you win!!!!!";
    }
}

function createDiv(content, style) {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.textContent = `${content}`;
    div.style.cssText = `${style}`;
    body.appendChild(div);
}


//the game starts here when the player clicks a button

let numberOfRounds = 0;
let computerWinCount = 0;
let playerWinCount = 0;

const btns = document.querySelectorAll("button");
console.log(btns);
btns.forEach(btn => {
    btn.addEventListener("click", function(e){ 
        ++ numberOfRounds
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.id;
        console.log("computer: " + computerSelection);
        console.log("player: " + playerSelection); 
        const resultThisRound = playRound(playerSelection, computerSelection);
        console.log(resultThisRound);
        createDiv(resultThisRound);
        //keep score:
        if (resultThisRound === "you lose") {
            computerWinCount ++;
        } else if (resultThisRound === "you win!") {
            playerWinCount ++;
        }
        //end game after 5 rounds:
        if (numberOfRounds === 5) {
            const winner = getWinnerOfFiveRounds()
            console.log(winner);
            createDiv(winner, 'font-size: 30px');
            numberOfRounds = 0;
            computerWinCount = 0;
            playerWinCount = 0;
        }
    });
});
