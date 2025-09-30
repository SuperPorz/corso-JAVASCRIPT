"use-strict"

// step 0: pesco il div-padre
let grid_padre = document.getElementById('grid-padre');

// step 1
window.addEventListener("load", (e) => {

    //azioni che partono con l'evento
    pageLoaded();
});

// step 2
const pageLoaded = (e) => {
    spawn_grid();
    grid_padre.addEventListener("click", switch_class_grid);
    document.body.addEventListener("click", switch_class_body, true);
};

// step 3a: funzione che crea la griglia
const spawn_grid = () => {  
    
    //ciclo 'for' per creare 16 caselle
    for(let i = 1; i <= 16; i++) {
      let grid_figlio = document.createElement('div');
      grid_figlio.className = "grid-figlio pVerde";
      grid_padre.appendChild(grid_figlio);
    }
}

// step 3b: funzione che switcha le classi
const switch_class_grid = (e) => {
    e.target.classList.toggle("pVerde");
    e.target.classList.toggle("pBlu");
    console.log("--------");
    console.log("CURRENT TARGET: ", e.currentTarget);
    console.log("TARGET: ", e.target);
    console.log("THIS: ", this);
    console.log("--------");
}

// step 3b: funzione che switcha le classi (non dovrebbero servire cicli)
const switch_class_body = (e) => {
    if (e.currentTarget == document.body) {
      let selectors = document.querySelectorAll('div > div');
      console.log(selectors);

      selectors.forEach(element => {
        if (element.className !== "pVerde") {
          element.classList.remove("pBlue");
          element.classList.toggle("pVerde");
        }
      });
    }
}
