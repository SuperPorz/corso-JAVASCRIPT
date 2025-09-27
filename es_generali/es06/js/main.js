'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
let li_elements = document.querySelectorAll("li");
console.log(li_elements);

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
        childs_text();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione->mostra in console i testi contenuti negli <li>
const childs_text = () => {
    li_elements.forEach( li =>
        console.log("contenuto: " + li.textContent)
    )
}