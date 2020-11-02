//Rand [0;255]
function randNum() {
    return Math.floor(Math.random()*256)
}

//Случайный RGB цвет
function randomColor() {
    return `rgb(${randNum()},${randNum()},${randNum()})`
}

//Случайны элемент
function randomElementOnPage() {
    const allElements = document.body.getElementsByTagName("*")
    const index = Math.floor(Math.random() * (allElements.length+1))
    return allElements[index]
}

//Случайный цвет для случайного элемента
function colorRandomElement() {
    randomElementOnPage().style.backgroundColor = randomColor()
}

//Дефолтный цвет для случайнгого элемента
function defaultColorRandomElement() {
    randomElementOnPage().style.backgroundColor = ''
}

const repeatColorRandomElement = setInterval(colorRandomElement, 2000)
const repeatDefaultColorRandomElement= setInterval(defaultColorRandomElement, 2000)
