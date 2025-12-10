function getComputerChoice(){
    x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
        x = "Rock"
    } else if (x == 2) {
        x = "Paper"
    } else {
        x = "Scissor"
    }
    return x
}

function getHumanChoice(){
    return prompt("What is your choice?","Rock, Paper, or Scissor")
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase()
    if (humanChoice == "Rock") {
        if (computerChoice == humanChoice) {
            console.log("Tie game!")
        } else if (computerChoice == "Paper") {
            computerScore += 1
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        } else {
            humanScore += 1
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == humanChoice) {
            console.log("Tie game!")
        } else if (computerChoice == "Scissor") {
            computerScore += 1
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        } else {
            humanScore += 1
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }
    } else {
        if (computerChoice == humanChoice) {
            console.log("Tie game!")
        } else if (computerChoice == "Rock") {
            computerScore += 1
            console.log("You lose! " + computerChoice + " beats " + humanChoice)
        } else {
            humanScore += 1
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        }
    }
}



function playGame() {
    for (let i = 0; i <= 4; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        console.log("Congratulation! You win the game!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game, don't worry try again!")
    } else {
        console.log("This is a tie game!")
    }
}

playGame()
