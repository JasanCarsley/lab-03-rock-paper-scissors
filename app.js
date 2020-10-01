// import functions and grab DOM elements
const throwButton = document.getElementById('throw');
const resetButton = document.getElementById('reset-button');

const displayLastThrow = document.getElementById('last-throw');
const dispalyWinLossDraw = document.getElementById('win-loss-draw');
const displayWinnerLoser = document.getElementById('winner-loser');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;




// Throw Button Handler
throwButton.addEventListener('click', () => {
    const userThrow = document.querySelector(':checked').id;


    // Get computers' choice
    const randomNumber = Math.floor(Math.random() * 3);
    let computerThrow

    if (randomNumber === 0) {
        computerThrow = 'rock';
    } else if (randomNumber === 1) {
        computerThrow = 'paper';
    } else {
        computerThrow = 'scissors';
    }

    
    // Decides if User wins or Not
    if (computerThrow === userThrow) {
        displayLastThrow.textContent = 'result of last throw: Draw';
        draws++;
        displayWinnerLoser.textContent = 'winner/loser: No one!'
    }
    else if (computerThrow === 'rock' && userThrow === 'paper') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins ++;
        displayWinnerLoser.textContent = 'winner/loser: User'
    }
    else if (computerThrow === 'rock' && userThrow === 'scissors') {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
        displayWinnerLoser.textContent = 'winner/loser: Computer'
    }
    else if (computerThrow === 'paper' && userThrow === 'rock') {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
        displayWinnerLoser.textContent = 'winner/loser: Computer'
    }
    else if (computerThrow === 'paper' && userThrow === 'scissors') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins++;
        displayWinnerLoser.textContent = 'winner/loser: User'
    }
    else if (computerThrow === 'scissors' && userThrow === 'rock') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins++;
        displayWinnerLoser.textContent = 'winner/loser: User'
    }
    else {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
        displayWinnerLoser.textContent = 'winner/loser: Computer'
    }

    dispalyWinLossDraw.textContent = `wins ${wins}, losses ${losses}, draws ${draws}`;
})


// Reset Button Handler
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    displayWinnerLoser.textContent = 'winner/loser';
    displayLastThrow.textContent = 'result of last throw';
    dispalyWinLossDraw.textContent = 'wins 0, losses 0, draws 0';
})