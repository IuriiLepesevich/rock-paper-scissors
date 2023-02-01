/*
    Declare the array of game options.

    The options are located in strict order, so element 'i' beats element 'i - 1'
    and looses to element 'i + 1'. This logic will be used in further algorithms.
*/
const gameOption = ['Rock', 'Paper', 'Scissors'];

const resultElem = document.querySelector('.result');
const scoreElem = document.querySelector('.score');
const buttons = document.querySelectorAll('.buttons');

let compScore = 0;
let playerScore = 0;

// Declare function getting random computer game choice
function getComputerChoice() {
    return gameOption[Math.floor(Math.random() * 3)];
}

function playerWins(playerChoice, computerChoice) {
    playerScore += 1;
    resultElem.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
}

function computerWins(playerChoice, computerChoice) {
    compScore += 1
    resultElem.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
}

function tieGame() {
    resultElem.textContent = `Tie game!`;
}

function dropError() {
    resultElem.textContent = 'ERROR!'
}

// Function colors borders of buttons, depending on player/computer choice
function colorButtonsBorder(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
        document.querySelector(`.buttons[data-option=
            ${playerChoice}]`).style.borderColor = 'yellow';
    } else {
        document.querySelector(`.buttons[data-option=
            ${playerChoice}]`).style.borderColor = 'green';

        document.querySelector(`.buttons[data-option=
            ${computerChoice}]`).style.borderColor = 'red';
    }
}

// Function resets game it it's starting state
function clearButtonsBorder() {
    buttons.forEach(button => button.style.borderColor = 'black');
}

// Declare function that plays one single round of the game
function playRound(playerChoice, computerChoice) {
    
    // Check if string is empty
    if (!playerChoice) return dropError();

    // Get indexes of player and computer choices from game options
    let playerIndex = gameOption.indexOf(playerChoice);
    let computerIndex = gameOption.indexOf(computerChoice);
    
    // Check if user input exist in game choices
    if (playerIndex === -1) return dropError();

    // Check if player and computer choices are the same
    if (playerIndex === computerIndex) return tieGame();
    
    // Get index distance
    let indexDistance = playerIndex - computerIndex;

    // Check game options logic and return round result
    if (indexDistance === 1 || indexDistance === -(gameOption.length - 1)) {
        return playerWins(playerChoice, computerChoice);
    } else {
        return computerWins(playerChoice, computerChoice);
    }
}

// Function resets game it it's starting state
function resetGame() {
    resultElem.style.color = 'black';
    resultElem.textContent = "To start - press a button";
    compScore = 0;
    playerScore = 0;
    scoreElem.textContent = `${playerScore}-${compScore}`;
    clearButtonsBorder();
}

buttons.forEach(button => button.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const playerChoice = button.dataset.option;

    clearButtonsBorder();
    colorButtonsBorder(playerChoice, computerChoice);

    playRound(playerChoice, computerChoice);

    scoreElem.textContent = `${playerScore}-${compScore}`

    if (playerScore >= 5) {
        resultElem.style.color = 'green';
        resultElem.textContent = "You won! Press button to play again.";
        button.addEventListener('click', resetGame, {once: true});
    } else if (compScore >= 5) {
        resultElem.style.color = 'red';
        resultElem.textContent = "You lost! Press button to play again.";
        button.addEventListener('click', resetGame, {once: true});
    }
}));