/*
    Declare the array of game options.

    The options are located in strict order, so element 'i' beats element 'i - 1'
    and looses to element 'i + 1'. This logic will be used in further algorithms.
*/
const gameOption = ['Rock', 'Paper', 'Scissors']

// Declare function getting random computer game choice
function getComputerChoice() {
    return gameOption[Math.floor(Math.random() * 3)];
}

// Declare function that plays one single round of the game
function playRound(playerChoice, computerChoice) {
    
    // Check if string is empty
    if (!playerChoice) return 'Invalid input';
    
    // Convert user input to lowercase string with first letter capital
    let pChoice = playerChoice.toLowerCase();
    pChoice = pChoice.replace(pChoice[0], pChoice[0].toUpperCase());

    // Get indexes of player and computer choices from game options
    let playerIndex = gameOption.indexOf(pChoice);
    let computerIndex = gameOption.indexOf(computerChoice);
    
    // Check if user input exist in game choices
    if (playerIndex === -1) return 'Invalid input';

    // Check if player and computer choices are the same
    if (playerIndex === computerIndex) return 'Tie game!';
    
    // Get index distance
    let indexDistance = playerIndex - computerIndex;

    // Check game options logic and return round result
    if (indexDistance === 1 || indexDistance === -(gameOption.length - 1)) {
        return `You Win! ${pChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${pChoice}`;
    }
}

// Declare function that plays the game (5 rounds)
function game() {
    console.clear();
    for (let i = 0; i < 5; i++) {
        console.log(`%cRound ${i + 1}!\n`, `font-size: 20px;`);
        console.log(playRound(prompt("Rock, Scissors or Paper?"),
        getComputerChoice()));
    }
}

const button = document.querySelector("#startGame");
button.addEventListener('click', game);