'use strict'

let pageCounter = 1;
let totalPages = 0;
let isLoaded = false;

const getData = async (pageCounterParam) => {
  let path = "https://reqres.in/api/users?page=" + pageCounterParam; //per esercizio: creare switch tra page=1 e page=2
  //let path = "https://www.fghgkhfkf.com";

  //ESEMPIO CON THEN/CATCH
  /* axios.get(path, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    })
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    //console.log(response.headers);
    console.log(response.config);

    totalPages = response.data.total_pages;

    console.table(response.data.data); //riga da tenere commentata
    buildTable(response.data);

    isLoaded = false;
    console.log("isLoaded from response: " + isLoaded);
  })
  .catch((err) => {
    console.log(err)
    isLoaded = false;
  }); */

  try {
    const response = await axios.get(path, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      }
    });

    /*console.log(response.headers);

    for(let [headerKey, headerValue] of response.headers)
    {
      console.log(`${headerKey} = ${headerValue}`);
    }*/

    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    //console.log(response.headers);
    console.log(response.config);

    totalPages = response.data.total_pages;

    /*if(pageCounter < totalPages)
      pageCounter++;
    else
      pageCounter = 1;*/

    buildTable(response.data);

    isLoaded = false;
    console.log("isLoaded from response: " + isLoaded);
  }
  catch(error)
  {
    console.log("error: " + error);

    isLoaded = false;
    console.log("isLoaded from error: " + isLoaded);
  }
}

const buildTable = (data) => {
  console.log(data.page);
  console.log(data.per_page);
  console.log(data.total);
  console.log(data.total_pages);

  let container = document.querySelector("#container");

  let table = document.createElement('table');
  container.append(table);

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
        td.addEventListener("click", (e) => {
          console.log(e.target);
          //console.log(e.currentTarget);

          //resetTimer();
          //resetElement("pTitolo");

          //intervalID = setInterval(setLetter2, 100, "pTitolo", `${currentObject.first_name} ${currentObject.last_name}`);
        });
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

const resetContainer = () => {
  let container = document.querySelector("#container");

  container.innerHTML = "";
}

const callData = pageCounterParam => {
  console.log("pageCounterParam: " + pageCounterParam);

  if(!isLoaded)
  {
    console.log("Getting data...");

    isLoaded = true;

    resetContainer(); //la prima volta, si crea un overhead perchè tabella è gia vuota
    getData(pageCounterParam);
  }
}

const pageLoaded = () => {
  let dataButton = document.querySelector("#dataButton");

  dataButton.addEventListener("click", e => {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);
  });
};

function checkImageInfo(message) {
  console.log("message: " + message);

  let company = document.getElementById("company");
  console.log("Dimensioni di company: " + company.offsetWidth + " " + company.offsetHeight);
}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOMContentLoaded!");

    console.dir(e);

    checkImageInfo("DOMContentLoaded");
});

//window.onload = () => pageLoaded();  //onload fa eseguire una specifica funzione che gli diciamo (poco usato)
window.addEventListener("load", (e) => {
  console.log("load!");
  
  console.dir(e);

  checkImageInfo("load");

  pageLoaded();
});

checkImageInfo("defer");