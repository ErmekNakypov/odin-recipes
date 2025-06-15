function playGame() {
    let computerScore = 0;
    let humanScore = 0; 
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log("Human: " + humanChoice);
        console.log("Computer: " + computerChoice);

        if (humanChoice === computerChoice) {
            console.log("Draw");
        } 
        else if (rules[humanChoice] === computerChoice) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } 
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log("\n");
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    console.log("Computer won: " + computerScore)
    console.log("Human won: " + humanScore)
    if (computerScore > humanScore) {
        console.log("Overall computer won");
    }
    else if (humanScore > computerScore) {
         console.log("Overall human won");
    }
    else {
        console.log("Draw")
    }
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
        return 'rock';
    }
    else if (rand === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Enter:");
    return input
}

playGame()