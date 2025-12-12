function playRound(humanChoice, computerChoice){
    const tieGame = "Tie game!";

    if (humanChoice == "Rock") {
        if (computerChoice == humanChoice) {
            rResult.textContent = "Round Result: " + tieGame;
        } else if (computerChoice == "Paper") {
            computerScore += 1
            rResult.textContent = "Round Result: You lose! " + computerChoice + " beats " + humanChoice;
        } else {
            humanScore += 1
            rResult.textContent = "Round Result: You win! " + humanChoice + " beats " + computerChoice;
        }
    } else if (humanChoice == "Paper") {
        if (computerChoice == humanChoice) {
            rResult.textContent = "Round Result: " + tieGame;
        } else if (computerChoice == "Scissor") {
            computerScore += 1
            rResult.textContent = "Round Result: You lose! " + computerChoice + " beats " + humanChoice;
        } else {
            humanScore += 1
            rResult.textContent = "Round Result: You win! " + humanChoice + " beats " + computerChoice;
        }
    } else {
        if (computerChoice == humanChoice) {
            rResult.textContent = "Round Result: " + tieGame;
        } else if (computerChoice == "Rock") {
            computerScore += 1
            rResult.textContent = "Round Result: You lose! " + computerChoice + " beats " + humanChoice;
        } else {
            humanScore += 1
            rResult.textContent = "Round Result: You win! " + humanChoice + " beats " + computerChoice;
        }
    }
}