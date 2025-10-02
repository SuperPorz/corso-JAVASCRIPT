'use strict'

//////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let pageCounter = 1;
let totalPages = 0;
let isLoaded = false;


//////////////////////////////////////////////////////
// FUNZIONE COSTRUISCI TABELLA
const buildTable = (data) => {

  //carico il container e ci appendo dentro un elemento 'table'
  let container = document.querySelector("#container");
  let table = document.createElement('table');
  container.append(table);
  
  //creo un elemento 'tr' e lo appendo alla tabella
  let tr = document.createElement("tr");
  table.append(tr);

  //setto un flag da usare per l'uscita dal ciclo for
  let isFirstTime = true;

  //ciclo 'for of' che itera sugli oggetti (1° liv. dell'array)
  for(const currentObject of data.data)
  {
    //creo variabilie che conterra 'n' righe, con n = n° oggetti nell'array
    let trn = document.createElement("tr");
    table.append(trn); //appendo alla tabella
    
    //ciclo 'for in' che itera sulle proprietà di ciascun oggetto
    for(const currentProperty in currentObject)
    {
      //se vera, creo elemento <th>, ovvero l'intestazione HTML di una tabella
      if(isFirstTime === true)
      {
        let thTable = document.createElement('th');
        thTable.innerHTML = `${currentProperty}`;
        tr.append(thTable);
      }

      //da qui in poi, si crea il resto della tabella HTML normalmente
      let td = document.createElement("td");
      if(currentProperty === "avatar")
      {
        td.innerHTML = `<img src="${currentObject[currentProperty]}" />`;
        td.className = 'interactiveTd';
        td.addEventListener("click", (e) => {console.log(e.target)});
      }
      else
      {
        td.innerHTML = `${currentObject[currentProperty]}`;
      }
      trn.append(td);
    }

    //settiamo il flag a false, cosi prossima iterazione non crea <th>
    isFirstTime = false;
  }
}


//////////////////////////////////////////////////////
// FUNZIONE ASYNC --> aspetta i dati esterni, poi costruisce la tabella
const getData = async (pageCounterParam) => {
pageCounterParam = 1;
let path = "https://reqres.in/api/users?page=" + 1;

  axios.get(path, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    })
  .then((response) => {
    totalPages = response.data.total_pages;
    if(pageCounter < totalPages) {
      pageCounter++;
    }
    else {
      pageCounter = 1;
      buildTable(response.data);
    }
    isLoaded = false;
  })
  .catch((err) => console.log(err));
}


//////////////////////////////////////////////////////
// FUNZIONE CALL DATA (chiama getData() )
const callData = pageCounterParam => {
  getData(pageCounterParam);
}


//////////////////////////////////////////////////////
// FUNZIONI PAGELOAD (aggiunge un 'event-listener al bottone e poi chiama 
// callData(), che a sua volta chiama getData (asincrona) che poi costruirà la tabella )
const pageLoaded = () => {
  let dataButton = document.querySelector("#dataButton");

  dataButton.addEventListener("click", e => {
    e.preventDefault(); // Previene il comportamento default
    e.stopPropagation(); // Ferma la propagazione dell'evento
    console.dir(e);
    callData(pageCounter);
  })
}

//////////////////////////////////////////////////////
// AGGIUNGIAMO EVENT-LISTENER tipo 'LOAD' ALL'OGGETTO WINDOW
window.addEventListener("load", (e) => {
  console.dir(e);
  pageLoaded();
});