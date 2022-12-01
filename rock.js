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
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK") {
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
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER") {
        return "tight";
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
        return "tight";
    }
    else {"Error"}

}

function game() {
    let score = 0;
    for (let i = 0; i < 5 ; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Pick Rock , Paper or Scissors: ");
        let round = playRound(playerSelection, computerSelection);
        if (round === "won") {
            score++;
            console.log("win")
        } 
        else if (round === "lose") {
            score--;
            console.log("lost")
        }
        else {console.log("tight")}
        console.log(score)
        
    }
    if (score > 2) {
        return "You won Congrats!"
    }
    else {return "Hardluck!"}
}

console.log(game())
