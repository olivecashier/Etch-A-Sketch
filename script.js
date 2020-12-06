const container = document.querySelector('div.container');
createGrid(10);

function createGrid(gridNumber) {
    let gridArea = gridNumber ** 2;
    for (let i = 0; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid__item');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement("beforeend", gridItem);
        gridItem.addEventListener('mouseover', (e) => {
            gridItem.style.backgroundColor = `rgb(${randomColor()})`;
        })
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function randomColor() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green= Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let colorsArr = [red,green,blue];
    return colorsArr.join(",");
}

function createCustomGrid() {
    let gridSize = prompt("Enter a new grid size", 10);
    if ((parseInt(gridSize) >=100) || (isNaN(gridSize))) {
        alert("Grid size more than 100, cause delays, freezes or crashes. Grid size will be set to 10")
        return createGrid(10);
    } 
    return createGrid(gridSize);
}