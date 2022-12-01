function getComputerChoice() {
    const randomNumber = Math.round(Math.random() * 10)
    let choice;
    if (randomNumber <= 3) {
        choice = "rock"
    }
    else if (randomNumber > 3 && randomNumber <= 7) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice;
           
}
console.log(getComputerChoice())
