'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
let lista = document.querySelector("#lista");
console.log(lista);

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
// step 2: funzione pageLoad: al caricamento, assegna l'ev-listener al bottone
const pageLoaded = () => {
    button.addEventListener("click", e => {
        new_li();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione di modifica dinamica del layout web
const new_li = () => {
    let li = document.createElement("li");
    li.textContent = "Nuovo elemento: 4";
    lista.appendChild(li);
}