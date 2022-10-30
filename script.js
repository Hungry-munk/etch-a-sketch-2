const GRID_CONTAINER = document.getElementById('grid-container')

let gridSize = 16


//used for centering the canvas
// const MAINTAG = document.querySelector('main')
// const FOOTER = document.querySelector('footer')
// const HEADER = document.querySelector('header')
// const BODY = document.querySelector('body')

// function resizeMainHeight() {
//     MAINTAG.style.height = BODY.offsetHeight - (FOOTER.offsetHeight + HEADER.offsetHeight)
// }



function createGrid(gridSize) {
    GRID_CONTAINER.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`
    GRID_CONTAINER.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        cell.addEventListener('click', changeCellBackgroundColor)
        cell.addEventListener('mouseover',changeCellBackgroundColor)
        GRID_CONTAINER.appendChild(cell)

    }
}

//letting grid know when
let mousedown = false
GRID_CONTAINER.onmousedown = ()=> mousedown = true
GRID_CONTAINER.onmouseup = ()=> mousedown = false
GRID_CONTAINER.onmouseleave = ()=> mousedown = false


function changeCellBackgroundColor (event) {
    if (event.type === 'mouseover' && !mousedown) return

    const cell = event.target
    cell.style.background = 'orange'
    
}

createGrid(gridSize)