'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI

////////////////////////////////////////////////////////////////////////////////
// step 1: aggiungo event-listener all'oggetto window e chiamo pageLoaded()
window.addEventListener("load", (e) => {
    //print di informazioni
    console.dir("tipo evento: " + e.type);

    //azioni che partono con l'evento
    e.preventDefault(); // Previene il comportamento default
    e.stopPropagation(); // Ferma la propagazione dell'evento
    pageLoaded();
});

////////////////////////////////////////////////////////////////////////////////
// step 2: funzione pageLoad: al caricamento, eseguo le richieste dell'esercizio
const pageLoaded = () => {
    let p = document.body.firstElementChild.firstElementChild;
    let parent_id = p.parentElement.id;
    console.log("PARENT ID: " + parent_id);
};