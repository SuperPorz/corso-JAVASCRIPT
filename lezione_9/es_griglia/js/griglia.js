"use-strict"

// step 0: CARICAMENTO PAGINA
window.addEventListener("load", (e) => pageLoaded(e));

// step 1: pesco il div-padre e i figli
let grid_padre = document.getElementById('grid-padre');
let grid_figli = grid_padre.children;
console.log(grid_figli);

// step 2
const pageLoaded = (e) => {
    spawn_grid();
    grid_padre.addEventListener("click", switch_class_grid);
    document.body.addEventListener("click", switch_class_body, true);
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

  //prima resetto le caselle che hanno classe blu
  for(element of grid_figli) {
    if (element.classList.contains("divBlu")) {
      element.classList.remove("divBlu");
      element.classList.toggle("divVerde");
    }
  }
  //dopo switcho classe da verde a blu
  e.target.classList.toggle("divVerde");
  e.target.classList.toggle("divBlu");
  console.log("--------");
  console.log("CURRENT TARGET: ", e.currentTarget);
  console.log("TARGET: ", e.target);
  console.log("THIS: ", this);
  console.log("--------");
}

// step 4b: funzione che switcha le classi se il current target è il body 
// (non dovrebbero servire cicli)
const switch_class_body = (e) => {
  if (e.currentTarget == document.body) {
    for (element of grid_figli) {
      if (element.classList.contains("divBlu")) {
        element.classList.remove("divBlu");
        element.classList.toggle("divVerde");
        console.log("--------");
        console.log("CURRENT TARGET: ", e.currentTarget);
        console.log("TARGET: ", e.target);
        console.log("THIS: ", this);
        console.log("--------");
      }
    };
  }
}
