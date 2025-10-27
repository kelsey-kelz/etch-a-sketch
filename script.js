const container = document.querySelector(".container");
container.classList.add("container");

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid (num) {
    container.innerHTML = "";

    const squareSize = 500/num;

    for (i=1; i <= num *num; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = randomRGB();
    })

    container.appendChild(square);
}
}
drawGrid(16);

const butDiv = document.querySelector(".button");
const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Start";
button.addEventListener("click", () => {
    let number = parseInt(prompt("Enter number of squares per side:"));
    if (number > 0 && number <= 100) {
        drawGrid(number);
    } else {
        alert("Invalid! Please Try Again!");
    }
    
})
butDiv.appendChild(button);







