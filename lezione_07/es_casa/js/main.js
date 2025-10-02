'use strict'

//////////////////////////////////////////////////////
// PREPARAZIONE VARIABILI
let pageCounter = 1;
let totalPages = 0;
let isLoaded = false;
let num_page = 1;
let dataButton = document.querySelector("#dataButton");
let path = "https://reqres.in/api/users?page=";
dataButton.innerHTML = 'Get Colleagues ' + num_page;


//////////////////////////////////////////////////////
// FUNZIONI LIBRERIA

// cambia colleghi (cambia il numero pagina da richiedere a reqres.in/api)
const cambia_colleghi = () => {
  if (num_page == 1) {
    path += num_page;
    num_page = 2;
    dataButton.innerHTML = 'Get Colleagues ' + num_page;
    return path;
  }
  else if (num_page == 2) {
    path += num_page;
    num_page = 1;
    dataButton.innerHTML = 'Get Colleagues ' + num_page;
    return path;
  }
}

// costruisci tabella
const buildTable = (data) => {

  let container = document.querySelector("#container");
  let table;

  if (container.innerHTML === "") {
    table = document.createElement('table');
    container.append(table);
  }
  else {
    container.innerHTML = ""
    table = document.createElement('table');
    container.append(table);
  }
  
  let tr = document.createElement("tr");
  table.append(tr);
  let isFirstTime = true;

  for(const currentObject of data.data)
  {
    console.log(currentObject);
    let trn = document.createElement("tr");
    table.append(trn);
    
    for(const currentProperty in currentObject)
    {
      if(isFirstTime === true)
      {
        let thTable = document.createElement('th');
        thTable.innerHTML = `${currentProperty}`;
        tr.append(thTable);
      }
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
    isFirstTime = false;
  }
}


//////////////////////////////////////////////////////
// FUNZIONE ASYNC --> aspetta i dati esterni, poi costruisce la tabella
const getData = async (pageCounterParam) => {
pageCounterParam = 1;

  if (num_page == 1) {
    console.log(path);
    path = cambia_colleghi(num_page);
    console.log(path);
  }
  else if (num_page == 2) {
    console.log(path);
    path = cambia_colleghi(num_page);
    console.log(path);
  }

  axios.get(path, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    })
  .then((response) => {
    totalPages = response.data.total_pages;
    if(pageCounter < totalPages)
      pageCounter++;
    else
      pageCounter = 1;
      buildTable(response.data);

    isLoaded = false;
    path = "https://reqres.in/api/users?page="; //RIPULISCO SEMPRE LA PATH a fine funzione
  })
  .catch((err) => console.log(err));
}


//////////////////////////////////////////////////////
// FUNZIONE CALL DATA (chiama getData() )
const callData = (pageCounterParam,) => {
  getData(pageCounterParam);
}


//////////////////////////////////////////////////////
// FUNZIONI PAGELOAD (chiama callData() )
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
// AGGIUNGIAMO EVENT-LISTENER ALL'OGGETTO WINDOW
window.addEventListener("load", (e) => {
  console.dir(e);
  pageLoaded();
});