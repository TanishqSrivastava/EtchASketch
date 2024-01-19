const container = document.getElementById("container");



function defaultGrid(){
    makeRows(16);
    makeCols(16);
}

function makeRows(n){
    for (let i = 0;i<n;i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "grid-rows";
    }
}
let rows = document.getElementsByClassName("grid-rows");
function makeCols(n){
    for (let i = 0;i<rows.length;i++){
        for (let j = 0;j<n;j++){
            let newcell = document.createElement("div");
            rows[j].appendChild(newcell).className = "cell";
        };
    };
};


