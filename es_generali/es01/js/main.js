'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
console.log(button);
let paragraph = document.querySelector("#testo");
console.log(paragraph);

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
// step 2: dichiaro funzione->quando viene chiamata, chiama funz. getData(), che
// va a chiedere ASINCRONICAMENTE i dati cercati
const pageLoaded = () => {
    button.addEventListener("click", e => {
        cambia_testo();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: FUNZIONE ASYNC -> aspetta i dati esterni, poi costruisce le CARDS
const cambia_testo = () => {
    paragraph.textContent = "Benvenuto nel DOM!";
}