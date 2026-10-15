const gridContainer = document.getElementById("grid-container");
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener(
    'click',
    clearBoard
);

for(let i = 0; i < 16*16; i++) {
    const grid = document.createElement('div');
    
    grid.classList.add('grid-square');

    grid.addEventListener(
        'mouseenter',
        (event) => {
            grid.style.backgroundColor = "black";
        }
    );

    gridContainer.appendChild(grid);   
}

function clearBoard() {
    let grids = gridContainer.getElementsByClassName('grid-square');
    
    for(let i = 0; i < grids.length; i++) {
        grids[i].style.backgroundColor = 'white';
    }
}
