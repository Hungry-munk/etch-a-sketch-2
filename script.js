const gridContainer = document.getElementById('grid-container')

let gridSize = 16


function createGrid(gridSize) {
    gridContainer.style.gridTemplateColumns= `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`

    for (i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.setAttribute('draggable', false)

        cell.addEventListener('click', changeCellBackgroundColor)
        cell.addEventListener('mouseover',changeCellBackgroundColor)
        gridContainer.appendChild(cell)

    }
}

//letting grid know when
let mousedown = false
gridContainer.onmousedown = ()=> mousedown = true
gridContainer.onmouseup = ()=> mousedown = false
gridContainer.onmouseleave = ()=> mousedown = false


function changeCellBackgroundColor (event) {
    if (event.type === 'mouseover' && !mousedown) return

    const cell = event.target
    cell.style.background = 'orange'
    
}

createGrid(gridSize)