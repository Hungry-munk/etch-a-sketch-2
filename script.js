const GRID_CONTAINER = document.getElementById('grid-container')

const BACKGROUND_COLOR_PICKER = document.getElementById('background-color')
const PEN_COLOR_PICKER = document.getElementById('pen-color')
const GRID_SIZER = document.getElementById('grid-sizer')

let grid_size = GRID_SIZER.value



function createGrid(gridSize) {
    GRID_CONTAINER.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`
    GRID_CONTAINER.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell', 'clean')

        cell.addEventListener('click', changeCellColor)
        cell.addEventListener('mouseover',changeCellColor)
        GRID_CONTAINER.appendChild(cell)

    }
}

function changeCellColor (event) {
    if (event.type === 'mouseover' && !mousedown) return

    const cell = event.target
    cell.style.background = 'orange'
    
}

function changeGridColour(colour) {
    GRID_CONTAINER.childNodes.forEach(cell => {
        cell.style.backgroundColor = colour
    })
}

//letting grid know when
let mousedown = false
GRID_CONTAINER.onmousedown = ()=> mousedown = true
GRID_CONTAINER.onmouseup = ()=> mousedown = false
GRID_CONTAINER.onmouseleave = ()=> mousedown = false

BACKGROUND_COLOR_PICKER.oninput = ()=> changeGridColour(BACKGROUND_COLOR_PICKER.value)





createGrid(grid_size)