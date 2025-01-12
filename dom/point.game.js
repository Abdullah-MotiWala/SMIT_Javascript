let score = 0
const options = [1, 2, 3, "Exit", 4, 5, 6]

function addPoints(option) {
    const scoreElement = document.getElementById('score')
    const prevScore = +scoreElement.innerText
    scoreElement.innerText = option + prevScore
}
function getOption() {
    let randomNumber = Math.random()
    randomNumber = randomNumber * 6
    randomNumber = Math.round(randomNumber)

    const option = options[randomNumber]
    return option
}

function showPoint() {
    const option = getOption()
    addPoints(option)

    const diceElement = document.getElementById('dice')
    diceElement.innerText = option
}
