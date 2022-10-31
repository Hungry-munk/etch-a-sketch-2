const GRID_CONTAINER = document.getElementById('grid-container')

// input fields
const BACKGROUND_COLOR_PICKER = document.getElementById('background-color')
const PEN_COLOR_PICKER = document.getElementById('pen-color')
const GRID_SIZER = document.getElementById('grid-sizer')

const SIZER_TEXT = document.querySelector('.grid-size-text')

// buttons
const TOGGLE_RAINBOW = document.querySelector('.rainbow-btn')
const TOGGLE_DARK = document.querySelector('.darker-btn')
const TOGGLE_ERASER = document.querySelector('.eraser-btn')
const TOGGLE_GRID = document.querySelector('.show-grid-btn')
const CLEAR_CANVAS = document.querySelector('.clear-btn')



let gridSize = GRID_SIZER.value
let penColour = PEN_COLOR_PICKER.value
let gridColor = BACKGROUND_COLOR_PICKER.value

// modes
let eraser = true
let rainbow = false
let dark = false
let grid = false



function createGrid(gridSize) {
    GRID_CONTAINER.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`
    GRID_CONTAINER.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell', 'clean')
        cell.style.backgroundColor = gridColor

        cell.addEventListener('click', changeCellColor)
        cell.addEventListener('mouseover',changeCellColor)

        GRID_CONTAINER.appendChild(cell)

    }
}

function changeCellColor (event) {
    if (event.type === 'mouseover' && !mousedown) return

    const cell = event.target
    cell.classList.remove('clean')

    cell.style.backgroundColor = rainbow ?  
        randomColour() : penColour
}

function changeGridColour() {
    let cleanCells = document.querySelectorAll('.clean')

    cleanCells.forEach(cell => 
        cell.style.backgroundColor = gridColor)
}

function updateSizerText () {
    SIZER_TEXT.textContent = `${gridSize} X ${gridSize}`
}
 
function removeCanvas(){
    GRID_CONTAINER.innerHTML = ''
}

function randomColour(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

function toggleGrid() {
    if (!grid){
        GRID_CONTAINER.childNodes.forEach(cell => 
            cell.classList.add('cell-border'))
        grid = true
        TOGGLE_GRID.classList.add('on')
    } else {
        GRID_CONTAINER.childNodes.forEach(cell => 
            cell.classList.remove('cell-border'))
        grid = false
        TOGGLE_GRID.classList.remove('on')
    }
}

//letting grid know when
let mousedown = false
GRID_CONTAINER.onmousedown = ()=> mousedown = true
GRID_CONTAINER.onmouseup = ()=> mousedown = false
// GRID_CONTAINER.onmouseleave = ()=> mousedown = false //a little buggy

// event listeners

BACKGROUND_COLOR_PICKER.oninput = ()=> {
    gridColor = BACKGROUND_COLOR_PICKER.value
    changeGridColour()
}

PEN_COLOR_PICKER.oninput = ()=> penColour = PEN_COLOR_PICKER.value
GRID_SIZER.oninput = ()=> {
    gridSize = GRID_SIZER.value
    removeCanvas()
    createGrid(gridSize)
    updateSizerText()
}

TOGGLE_GRID.addEventListener('click', toggleGrid)



createGrid(gridSize)
updateSizerText()