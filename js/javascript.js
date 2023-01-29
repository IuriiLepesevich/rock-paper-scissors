const playOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return playOptions[Math.floor(Math.random() * 3)];
}