const CANVAS_SIZE = 960;

const canvas = document.querySelector("#canvas");
canvas.style.width = `${CANVAS_SIZE}px`;
canvas.style.height = `${CANVAS_SIZE}px`; 

generateGrid(16);

canvas.addEventListener("mouseover", (e) => {
    let square = e.target;
    if (square.classList.contains("square")) {
        square.classList.add("colored");
    }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    resetGrid();
    let size = window.prompt("Input a size between 1 and 100");
    if (size > 100 || size < 1) {
        size = 16;
    }
    generateGrid(size);
});

//==========functions===========================================================

function generateGrid(size) {
    let squareSize = CANVAS_SIZE / size;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            canvas.appendChild(square);
        }
    }
}

function resetGrid() {
    let squareList = document.querySelectorAll(".square");
    squareList.forEach((square) => {
        canvas.removeChild(square);
    })
}