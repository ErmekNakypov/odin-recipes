let computerScore = 0;
let humanScore = 0; 
const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
        gameState.textContent += 'Draw\n'
    } 
    else if (rules[humanChoice] === computerChoice) {
        gameState.textContent += `You win! ${humanChoice} beats ${computerChoice}\n`
        humanScore++;
    } 
    else {
        gameState.textContent += `You lose! ${computerChoice} beats ${humanChoice}\n`
        computerScore++;
    }

    scores.textContent = 'Your score: ' + humanScore + '\n'
    scores.textContent += 'Computer score: ' + computerScore + '\n\n'

    if (computerScore == 5 || humanScore == 5) {
        computerScore = 0
        humanScore = 0
        gameState.textContent = ''
        if (computerScore > humanScore) {
            gameState.textContent += 'Overall: computer won'
        }
        else if (humanScore > computerScore) {
            gameState.textContent += 'Overall: human won'
        }
        else {
            gameState.textContent += 'Overall: draw'
        }
    }
}

    const results = document.querySelector('.results')
    const gameState = document.createElement('p')
    const scores = document.createElement('p')

    scores.textContent = 'Your score: ' + humanScore + '\n'
    scores.textContent += 'Computer score: ' + computerScore + '\n\n'

    results.appendChild(scores)
    results.appendChild(gameState)

    results.setAttribute('style', 'white-space: pre-line; background-color: pink; margin-top: 10px;')

    const container = document.querySelector('.container')

    container.addEventListener('click', (e) => {
        const computerSelection = getComputerChoice()
        const content = e.target.textContent
        gameState.textContent = ''
        gameState.textContent += `You: ${content}\n`
        gameState.textContent += 'Computer: ' + computerSelection + '\n'
        playRound(content, computerSelection)
    })
  

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
