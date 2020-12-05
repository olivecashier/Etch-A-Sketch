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
            gridItem.classList.add('color');
        })
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}