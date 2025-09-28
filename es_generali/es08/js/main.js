'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
let box2 = document.querySelector("#box2"); 

console.log(box2);

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
        switch_class();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione->alterna le classi di un target
const switch_class = () => {
    box2.classList.toggle("rosso"); //prima rosso non settato, quindi lo setta
    box2.classList.toggle("blu"); //blu dall'inizio, quindi al click si toglie -->prossimo click tutto al contrario
}