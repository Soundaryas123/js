
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
            return `You Won :)`
        } else if (computerChoice === 'Bat') {
            return `It's a tie :|`
        } else {
            return 'You lost :('
        }

    } else if (userChoice === 'Ball') {
        if (computerChoice === 'Ball') {
            return `It's a tie :|`
        } else if (computerChoice === 'Bat') {
            return `You lost :(`
        } else {
            return 'You Won :) '
        }

    } else {
        if (computerChoice === 'Ball') {
            return `You lost :( `
        } else if (computerChoice === 'Bat') {
            return `You Won :) `
        } else {
            return `It's a tie :|`
        }

    }


}

function showResult(userChoice, computerChoice, resultMsg) {
    alert(`You have choosen ${userChoice}. Computer Choice is ${computerChoice} and ${resultMsg}`)
}