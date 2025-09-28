'use strict'

////////////////////////////////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let button = document.querySelector("#button");
let container = document.querySelector("#tabella-container");
let numbers = [1,2,3,4,5,6,7,8,9];

console.log(container);
console.log(numbers);

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
        spawn_table();
    });
};

////////////////////////////////////////////////////////////////////////////////
// step 3: funzione->crea la tabella e la appende al target dell'ev.listener
const spawn_table = () => {
    let table = document.createElement('table');
    table.className = "table";
    container.append(table);

    //setto un contatore che dovrà fermarsi a 3, per avere table 3x3
    let counter = 1;

    //creo le 3 righe della tabella e le appendo direttamente alla table
    let prima_riga = document.createElement("tr");
    let seconda_riga = document.createElement("tr");
    let terza_riga = document.createElement("tr");
    table.append(prima_riga);
    table.append(seconda_riga);
    table.append(terza_riga);
    
    //ciclo 'for of' che itera sulla lista 'numbers'
    for(const number of numbers) {
        
        console.log(counter);
        if(counter <= 3) {
            let td = document.createElement("td");
            td.innerHTML = number;
            prima_riga.append(td);
            counter++;
            console.log(counter);
        }
        else if(counter > 3 && counter <= 6) {
            let td = document.createElement("td");
            td.innerHTML = number;
            seconda_riga.append(td);
            counter++;
            console.log(counter);
        }
        else {
            let td = document.createElement("td");
            td.innerHTML = number;
            terza_riga.append(td);
            counter++;
            console.log(counter);
        }
    }    
}