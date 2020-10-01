// import functions and grab DOM elements
const throwButton = document.getElementById('throw');
const resetButton = document.getElementById('reset-button');

const displayLastThrow = document.getElementById('last-throw');
const displayWinLossDraw = document.getElementById('win-loss-draw');
const displayWinnerLoser = document.getElementById('winner-loser');
const throwCounter = document.getElementById('game-counter');
const matchesCounter = document.getElementById('matches-counter');
const resetsCounter = document.getElementById('resets-counter');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let throwsLeft = 5;
let matchesPlayed = 0;
let resets = 0;



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
    }
    else if (computerThrow === 'rock' && userThrow === 'paper') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins ++;
    }
    else if (computerThrow === 'rock' && userThrow === 'scissors') {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
    }
    else if (computerThrow === 'paper' && userThrow === 'rock') {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
    }
    else if (computerThrow === 'paper' && userThrow === 'scissors') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins++;
    }
    else if (computerThrow === 'scissors' && userThrow === 'rock') {
        displayLastThrow.textContent = 'result of last throw: Win';
        wins++;
    }
    else {
        displayLastThrow.textContent = 'result of last throw: Loss';
        losses++;
    }

    displayWinLossDraw.textContent = `wins ${wins}, losses ${losses}, draws ${draws}`;

    throwsLeft--;
    throwCounter.textContent = throwsLeft;

    if (throwsLeft === 0) {
        throwButton.disabled = true;

        if (wins === losses) {
            displayWinnerLoser.textContent = "It's a draw!";
        }
        else if (wins > losses) {
            displayWinnerLoser.textContent = "User wins!";
        }
        else {
            displayWinnerLoser.textContent = "Computer wins!";
        }

        matchesPlayed++;
        matchesCounter.textContent = `Matches played: ${matchesPlayed}`;
    }
})


// Reset Button Handler
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    throwsLeft = 5;
    resets++;

    displayWinnerLoser.textContent = 'winner/loser';
    displayLastThrow.textContent = 'result of last throw';
    displayWinLossDraw.textContent = 'wins 0, losses 0, draws 0';
    throwCounter.textContent = throwsLeft;

    resetsCounter.textContent = `Resets: ${resets}`;

    throwButton.disabled = false;
})