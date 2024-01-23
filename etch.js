const grid = document.getElementById("grid");
let heading = document.getElementById("heading");
var currentMode = "";
var draw = false;
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
const eraserBtn = document.getElementById("eraser");

function currentMode(){
    
}
function changeColor(e){
    if (currentMode == 'white' && draw == true){
        e.target.style.backgroundColor= '#fefefe';
    }else if(currentMode == 'rainbow' && draw == true){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }else if(currentMode == 'eraser' && draw == true){
        e.target.style.backgroundColor = 'black';
    }else if(currentMode == 'none' || draw == false){
        
    }
}

setupGrid(32);
function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}
function activateButton(newMode){
    if (newMode == 'rainbow'){
        heading.innerHTML = "Rainbow";
    }else if(newMode=='white'){
        heading.innerHTML = "White";
    }else if(newMode=='eraser'){
        heading.innerHTML = "Eraser";
    }else if(newMode == 'none'){
        heading.innerHTML = "No Mode";
    }
}
window.onload = () => {
    
    

    whiteBtn.onclick = () => setCurrentMode('white');
    rainbowBtn.onclick = () => setCurrentMode('rainbow');
    eraserBtn.onclick = () => setCurrentMode('eraser');   
    
}

window.onkeydown = function(event){
    if (event.keyCode === 78){
        setCurrentMode('none');
    }
    if (event.keyCode === 32){
        setCurrentMode('eraser');
    }
}
window.onmousedown = function(){
    draw = true;
}
window.onmouseup = function(){
    draw = false;
}
