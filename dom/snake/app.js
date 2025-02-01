const gameArea = document.getElementById("game-area")
const snake = document.getElementById("snake")
const ball = document.getElementById("ball")

const moveTheSnake = (e) => {
    const isRight = e.code === "ArrowRight"
    const isUp = e.code === "ArrowUp"

    if (isRight) {
        const positionDetail = snake.getBoundingClientRect()
        snake.style.animationName = "leftToRight"
        snake.style.transform = "rotate(90deg)"
        snake.style.top = positionDetail.top + "px"
        snake.style.left = positionDetail.left + "px"
    }

    else if (isUp) {
        console.log(isUp, "===isUp")
        const positionDetail = snake.getBoundingClientRect()
        // snake.style.animationName = "bottomToTop"
        snake.style.transform = "rotate(-90deg)"
        // snake.style.top = positionDetail.top + "px"
        // snake.style.left = positionDetail.left + "px"
    }
}
gameArea.addEventListener('keydown', moveTheSnake)


const getRandomNumber = () => {
    const generatedRandomNumber = Math.random()
    const expectedNumber = Math.floor(generatedRandomNumber * 96)
    return expectedNumber
}

const popTheBall = (e, b, c) => {
    const top = getRandomNumber()
    const left = getRandomNumber()

    ball.style.top = `${top}vh`
    ball.style.left = `${left}vw`
}

popTheBall()

const keyClick = (e) => {
    alert("click")
    // console.log(e, "===event")

}


// function addNew(name, cb) {
//     console.log(name)
//     const event = {
//         name: name,
//     }

//     cb(event)
// }

// function prevent(e){
//     console.log(e)
// }
// function suicide(){
//     console.log()
// }

// addNew('earthQuake',prevent)