"use-strict"

// step 0: CARICAMENTO PAGINA
window.addEventListener("load", (e) => pageLoaded(e));

// step 1: pesco il div-padre e i figli
let grid_padre = document.getElementById('grid-padre');
let grid_figli = grid_padre.children;

// step 2: funzione -> chiamo costruz. griglia + aggiungo event al document
const pageLoaded = (e) => {
    spawn_grid();
    document.addEventListener("click", switch_class_grid);
};

// step 3: funzione che crea la griglia
const spawn_grid = () => {  
    for(let i = 1; i <= 16; i++) {
        let grid_figlio = document.createElement('div');
        grid_figlio.className = "divVerde";
        grid_padre.appendChild(grid_figlio);
    }
}

// step 4: funzione che switcha le classi
const switch_class_grid = (e) => {
    
    let div_blu = document.querySelector('.divBlu');
    let obj = e.target; //abbreviazione

    if (e.currentTarget == document) {
        if (obj.className == "divVerde" ||
             obj.className == "divBlu") {
            ['divVerde', 'divBlu']
            .forEach( className => obj.classList.toggle(className));     
        }
        if (div_blu != undefined) {
            div_blu.className = "divVerde";
        }
    }
    else {
        if (div_blu != undefined) {
            div_blu.className = "divVerde";
        }
    }
    console.log("CURRENT TARGET: ", e.currentTarget);
    console.log("TARGET: ", obj);
    console.log("--------");
}