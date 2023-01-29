const playOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return playOptions[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
    
    if (!playerChoice) return 'Invalid input';
    
    let pChoice = playerChoice.toLowerCase();
    pChoice = pChoice.replace(pChoice[0], pChoice[0].toUpperCase());

    if (pChoice === computerChoice) return 'Tie game!';

    let result;

    switch (pChoice) {
        case 'Rock':
            result = (computerChoice === 'Scissors');
            break;
        
        case 'Paper':
            result = (computerChoice === 'Rock');
            break;
        
        case 'Scissors':
            result = (computerChoice === 'Paper');
            break;
        
        default:
            return 'Invalid input';
    }

    if (result) {
        return `You Win! ${pChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${pChoice}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`%cRound ${i + 1}!\n`, `font-size: 20px;`);
        console.log(playRound(prompt("Rock, Scissors or Paper?"),
        getComputerChoice()));
    }
}

game();