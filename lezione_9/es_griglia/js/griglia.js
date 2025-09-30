"use-strict"

// step 0: CARICAMENTO PAGINA
window.addEventListener("load", (e) => pageLoaded(e));

// step 1: pesco il div-padre e i figli
let grid_padre = document.getElementById('grid-padre');
let grid_figli = grid_padre.children;

// step 2
const pageLoaded = (e) => {
    spawn_grid();
    document.addEventListener("click", switch_class_grid);
};

// step 3: funzione che crea la griglia
const spawn_grid = () => {  
    for(let i = 1; i <= 16; i++) {
        let grid_figlio = document.createElement('div');
        grid_figlio.className = "grid-figlio divVerde";
        grid_padre.appendChild(grid_figlio);
    }
}

// step 4a: funzione che switcha le classi
const switch_class_grid = (e) => {
    
    let x = document.querySelector('.divBlu');

    if (e.currentTarget == document) {
        if (e.target.className == "grid-figlio divVerde") {
            e.target.classList.toggle("divVerde");
            e.target.classList.toggle("divBlu");        
        }
        else if (e.target.className == "grid-figlio divBlu") {
            e.target.classList.toggle("divBlu");
            e.target.classList.toggle("divVerde");
        }
        if (x != undefined) {
            x.className = "grid-figlio divVerde";
        }
    }
    else {
        if (x != undefined) {
            x.className = "grid-figlio divVerde";
        }
    }
    console.log("--------");
    console.log("CURRENT TARGET: ", e.currentTarget);
    console.log("TARGET: ", e.target);
    console.log("--------");
}


// per indentare quella merda a 2 spazi: ctrl+shift+p -> 'reindent lines'
