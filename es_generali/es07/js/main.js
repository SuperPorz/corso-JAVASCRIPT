'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
let element1 = document.body.firstChild.nextSibling;

//altri modi per selezionare il "p" target
let element2 = document.body.children[0];
let element3 = document.querySelector("body > p");
let element4 = document.querySelector("#messaggio"); //classico

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);

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
        replace_element();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione->sostituisce vecchio elemento con nuovo
const replace_element = () => {
    let new_element = document.createElement("h2");
    new_element.textContent = "Nuovo Titolo";
    element1.replaceWith(new_element);
}