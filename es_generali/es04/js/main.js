'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button_add = document.querySelector("#button_add");
let button_remove = document.querySelector("#button_remove");
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
// step 2: funzione pageLoad: al caricamento, assegna gli ev-list. ai bottoni
const pageLoaded = () => {
    button_add.addEventListener("click", e => {
        new_li();
    });

    button_remove.addEventListener("click", e => {
        remove_li();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3a: funzione di modifica dinamica del layout web
const new_li = () => {
    let li = document.createElement("li");
    li.textContent = "Nuovo elemento: 4";
    lista.appendChild(li);
}

////////////////////////////////////////////////////////////////////////////////
// step 3b: funzione di modifica dinamica del layout web
const remove_li = () => {
    lista.removeChild(lista.lastElementChild);
}