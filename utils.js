export function doesUserWin(userThrow, computerThrow) {
    if (computerThrow === userThrow) {
        return 'draw';
    }
    else if (computerThrow === 'rock' && userThrow === 'paper') {
        return 'win';
    }
    else if (computerThrow === 'rock' && userThrow === 'scissors') {
        return 'loss'
    }
    else if (computerThrow === 'paper' && userThrow === 'rock') {
        return 'loss'
    }
    else if (computerThrow === 'paper' && userThrow === 'scissors') {
        return 'win';
    }
    else if (computerThrow === 'scissors' && userThrow === 'rock') {
        return 'win';
    }
    else {
        return 'loss'
    }
}


export function getComputerThrow() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}