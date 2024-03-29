let scoreStr = localStorage.getItem('Score')
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {

    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    }
    score.displayScore = function () {
        return `Score : Won: ${score.win} , Lost: ${score.lost} ,Tie: ${score.tie} `
    }
    showResult();
}
function generateComputerChoice() {
    let randomNum = Math.random() * 3;
    if (randomNum > 0 && randomNum <= 1) {
        return 'Bat';
    } else if (randomNum > 1 && randomNum <= 2) {
        return 'Ball';
    } else {
        return 'Stump'
    }
}

function cricketResult(userChoice, computerChoice) {

    if (userChoice === 'Bat') {
        if (computerChoice === 'Ball') {
            score.win++
            return `You Won :)`
        } else if (computerChoice === 'Bat') {
            score.tie++
            return `It's a tie :|`
        } else {
            score.lost++
            return 'You lost :('
        }

    } else if (userChoice === 'Ball') {
        if (computerChoice === 'Ball') {
            score.tie++
            return `It's a tie :|`
        } else if (computerChoice === 'Bat') {
            score.lost++
            return `You lost :(`
        } else {
            score.win++
            return 'You Won :) '
        }

    } else {
        if (computerChoice === 'Ball') {
            score.lost++
            return `You lost :( `
        } else if (computerChoice === 'Bat') {
            score.win++
            return `You Won :) `
        } else {
            score.tie++
            return `It's a tie :|`
        }

    }


}

function showResult(userChoice, computerChoice, resultMsg) {
    localStorage.setItem('Score', JSON.stringify(score));

    document.querySelector('#user-choice').innerText = userChoice ? `You have choosen ${userChoice}` : '';
    document.querySelector('#computer-choice').innerText = computerChoice ? `Computer Choice is ${computerChoice}` : '';
    document.querySelector('#result').innerText = resultMsg || '';
    document.querySelector('#score').innerText = score.displayScore()


}