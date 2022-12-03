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
    if (rockButton.id.toUpperCase() == computerSelection.toUpperCase()) {
        console.log("tight")
        return "tight";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") {
        console.log("won")
        return "won";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        console.log("won")
        return "won";
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        console.log("won")
        return "won";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
        console.log("lose")
        return "lose";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
        console.log("lose")
        return "lose"
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        console.log("lose")
        return "lose";
    }

    else { return "Error"}

}

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
let computreScore = document.querySelector('#computerScore')
let myScore = document.querySelector('#myScore')
let winnerMessage = document.querySelector('#winner')
let player1 = 0;
let player2 = 0;

myScore.textContent = 0;
computreScore.textContent = 0;
rockButton.addEventListener('click', () => {
    let winner = playRound(rockButton.id, getComputerChoice())
    if (winner === "won") {
        player1++
        myScore.textContent = player1
        if (player1 === 5){
            winnerMessage.textContent = "Congratultaion You Won!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0; 
        }
        else {winnerMessage.textContent = ""}
    }
    else if (winner === "lose"){
        player2++
        computreScore.textContent = player2
        if (player2 === 5){
            winnerMessage.textContent = "HardLuck You Lost!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0;
        }
        else {winnerMessage.textContent = ""}
    }
        
        
    }
)

paperButton.addEventListener('click', () => {
    let winner = playRound(rockButton.id, getComputerChoice())
    if (winner === "won") {
        player1++
        myScore.textContent = player1
        if (player1 === 5){
            winnerMessage.textContent = "Congratultaion You Won!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0;
            
        }
        else {winnerMessage.textContent = ""}
    }
    else if (winner === "lose"){
        player2++
        computreScore.textContent = player2
        if (player2 === 5){
            winnerMessage.textContent = "HardLuck You Lost!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0;
            
        }
        else {winnerMessage.textContent = ""}
    }
    }
)

scissorsButton.addEventListener('click', () => {
    let winner = playRound(rockButton.id, getComputerChoice())
    if (winner === "won") {
        player1++
        myScore.textContent = player1
        if (player1 === 5){
            winnerMessage.textContent = "Congratultaion You Won!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0;
        }
        else {winnerMessage.textContent = ""}
    }
    else if (winner === "lose"){
        player2++
        computreScore.textContent = player2
        if (player2 === 5){
            winnerMessage.textContent = "HardLuck You Lost!"
            myScore.textContent = 0;
            computreScore.textContent = 0;
            player1 = 0;
            player2 = 0;
        }
        else {winnerMessage.textContent = ""}
    }
    }

)








