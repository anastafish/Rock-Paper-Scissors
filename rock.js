function getComputerChoice() {
    const randomNumber = Math.round(Math.random() * 12)
    let choice;
    if (randomNumber <= 3) {
        choice = "ROCK"
    }
    else if (randomNumber > 3 && randomNumber <= 6) {
        choice = "PAPER"
    }
    else {
        choice = "SCISSORS"
    }
    return choice;
           
}

function playRound(playerSelection , computerSelection) {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return "tight";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
        return "won";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        return "won";
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return "won";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
        return "lose";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
        return "lose"
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        return "lose";
    }

    else { return "Error"}

}

function game() {
    let wins = 0;
    let loses = 0;
    for (let i = 0; i < 5 ; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Pick Rock , Paper or Scissors: ");
        let round = playRound(playerSelection, computerSelection);
        if (round === "won") {
            wins++;
            console.log("win")
        } 
        else if (round === "lose") {
            loses++;
            console.log("lost")
        }
        else {console.log("tight")}
        console.log(wins,loses)
        
    }
    if (wins > loses) {
        return "You won Congrats!"
    }
    else if (loses > wins) {
        return "HardLuck!"
    }
    else {return "tight!"}
}

console.log(game())
