'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
console.log(button);

let box = document.querySelector("#box");
console.log(box);

////////////////////////////////////////////////////////////////////////////////
// step 1: aggiungo event-listener all'oggetto window e chiamo pageLoaded()
window.addEventListener("load", (e) => {
    //print di informazioni
    console.dir(e);

    //azioni che partono con l'evento
    e.preventDefault(); // Previene il comportamento default
    e.stopPropagation(); // Ferma la propagazione dell'evento
    pageLoaded();
});

////////////////////////////////////////////////////////////////////////////////
// step 2: funzione pageLoad: al caricamento, assegna gli ev-list. ai bottoni
const pageLoaded = () => {
    button.addEventListener("click", e => {
        css_box();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione di modifica dinamica del layout web
const css_box = () => {
    box.className = "box-colors";
}