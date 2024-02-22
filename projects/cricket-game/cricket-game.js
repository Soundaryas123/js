let score = {
    win: 0,
    lost: 0,
    tie: 0,
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

    // let computerChoice = generateComputerChoice()
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
    alert(`You have choosen ${userChoice}. Computer Choice is ${computerChoice}. 
     ${resultMsg}
     Won: ${score.win} , Lost: ${score.lost} ,Tie: ${score.tie} ,`)
}