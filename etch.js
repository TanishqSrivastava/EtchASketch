const grid = document.getElementById("grid");
const head = document.getElementById("heading");
var currentMode = "";
function setupGrid(size){
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-element");
        gridElement.addEventListener("mouseover", changeColor);
        gridElement.addEventListener("mousedown", changeColor);
        grid.appendChild(gridElement);
    }
}


const whiteBtn = document.getElementById("colorWhite");
const rainbowBtn = document.getElementById("colorRainbow");


function currentMode(){
    
}
function changeColor(e){
    if (currentMode == 'white'){
        e.target.style.backgroundColor= '#fefefe';
    }else if(currentMode == 'rainbow'){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

setupGrid(16);
function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}
function activateButton(newMode){
    if (newMode == 'rainbow'){
        head.innerHTML = "Rainbow";
    }else if(newMode=='white'){
        head.innerHTML = "White";
    }
}
window.onload = () => {
    
    

    whiteBtn.onclick = () => {currentMode = 'white'};
    rainbowBtn.onclick = () => {currentMode = 'rainbow'};
    
    
}