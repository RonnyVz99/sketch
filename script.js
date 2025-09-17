const grid = 600;
let squares = 16;
let currentcolor = "black";

const skarea = document.querySelector("#area");
skarea.style.width = skarea.style.height = `${grid}px`;

document.querySelector(".footer button:nth-child(1)").addEventListener("click", () => currentcolor = "black");
document.querySelector(".footer button:nth-child(2)").addEventListener("click", () => currentcolor = "random");
document.querySelector(".footer button:nth-child(3)").addEventListener("click", () => {document.querySelectorAll(".cell").forEach(cell => cell.style.backgroundColor = "white")});

function createGridCells(){
     skarea.innerHTML = "";
    const numsquares = (squares * squares);
    const WidthHeight = `${(grid / squares) - 2}px`;
    for (let i = 0; i < numsquares; i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = gridCell.style.height = WidthHeight;
        gridCell.classList.add("cell");

        gridCell.addEventListener("mouseover" , () => {

            if (currentcolor === "random"){
                gridCell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }else{
            gridCell.style.backgroundColor = currentcolor;
            }
        }
        ); 
        skarea.appendChild(gridCell);

    }
}

createGridCells();


document.getElementById("pop").addEventListener("click", () => {
    let newSize = parseInt(prompt("Ingrese el tamaño del grid (ej: 16 para 16x16):"));

    if (newSize && newSize > 0 && newSize <= 100) { // límite de seguridad
        squares = newSize;
        createGridCells();
    } else {
        alert("Por favor ingrese un número válido (1 - 100).");
    }
});