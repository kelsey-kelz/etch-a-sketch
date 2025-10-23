const container = document.querySelector("div");



function drawDivs (num) {
    for (let i = 1; i <= num; i++) {
        
        const square = document.createElement("div");
        square.setAttribute("style", "border: 1px solid red; width: 40px; height: 40px; box-sizing: border-box;");

        square.addEventListener("mouseover", () => {
            square.style.background = "red";
        })

        container.appendChild(square);
        
    }
}

drawDivs(256);

