"use-strict"

//Begin Laboratorio: creazione di banner pubblicitari temporizzati.
let bannerIntervalID = null;

const banner1 = {
  title: "Company 1",
  imageSrc: "images/company_1.jpeg",
  imageAlt: "Image of company 1!",
  description: "111 Aaa bbb ccc ddd eee",
}

const banner2 = {
  title: "Company 2",
  imageSrc: "images/company_2.webp",
  imageAlt: "Image of company 2!",
  description: "222 Aaa bbb ccc ddd eee",
}

const banner3 = {
  title: "Company 3",
  imageSrc: "images/company_3.webp",
  imageAlt: "Image of company 3!",
  description: "333 Aaa bbb ccc ddd eee",
}

const banner4 = {
  title: "Company 4",
  imageSrc: 'x\" onerror="alert(\'Ti ho fregato!\')',
  imageAlt: "Image of company 4!",
  description: "444 Aaa bbb ccc ddd eee",
}

const banners = [
  banner4,
  banner1,
  banner2,
  banner3,

];

console.table(banners);

let bannersCounter = 0;

//End Laboratorio: creazione di banner pubblicitari temporizzati.

//Begin Laboratorio: impostazione dei dati per le scritte animate.
let intervalID = null;
let charsCounter = 0;
let classes = ["pBlue", "pAzzurro", "pRosso", "pRosa", "pGiallo"];
let classesCounter = 0;
//End Laboratorio: impostazione dei dati per le scritte animate.

let pageCounter = 1;
let totalPages = 0;
let isLoaded = false;

const getData = async (pageCounterParam) => {

  let path = "https://reqres.in/api/users?page=" + pageCounterParam;
  //let path = "https://www.fghgkhfkf.com";

  //Esempiuo con .then() e .catch().
  /*axios.get(path, {
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

    console.table(response.data.data);
    buildTable(response.data);

    isLoaded = false;
    console.log("isLoaded from response: " + isLoaded);
  })
  .catch((err) => {
    console.log(err);

    isLoaded = false;
  });*/

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

const setLetter2 = (id, message) => {

  if(charsCounter<message.length)
  {
    //message = //All my colleagues!
    //message.charAt(0) -> 'A'
    const element = document.getElementById(id);
    const currentChar = message.charAt(charsCounter); 

    //element.innerHTML += DOMPurify.sanitize("<span class=" + classes[classesCounter] + ">" + currentChar + "</span>"); //Concatenazione.
    element.innerHTML += DOMPurify.sanitize(`<span class="${classes[classesCounter]}">${currentChar}</span>`); //Interpolazione.

    /*let span = document.createElement("span");
    span.textContent = currentChar;
    span.className = classes[classesCounter];
    element.append(span);*/

    if(classesCounter<classes.length - 1)
    {
      classesCounter++;
      console.log("classesCounter: " + classesCounter);
    }
    else
    {
      classesCounter = 0;
    }

    charsCounter++;
  }
  else
  {
    clearInterval(intervalID);
    //resetTimer();
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
      td.className = "dr";

      //if(currentProperty === "avatar")
      if(currentProperty === "pantone_value")
      {
        td.innerHTML = `<img src="images/company_1.jpeg" width="200px" height="200px"/>`;
        //td.innerHTML = `<img src="${currentObject[currentProperty]}" />`;
        td.classList.add('interactiveTd');
        /*td.addEventListener("click", (e) => {
          //console.log(this);

          //resetTimer();
          //resetElement("pTitolo");

          //intervalID = setInterval(setLetter2, 100, "pTitolo", `${currentObject.first_name} ${currentObject.last_name}`);
        });*/
        
        td.firstElementChild.ondragstart = function() {
          return false;
        };
        td.firstElementChild.addEventListener("mousedown", manageMouseDown);
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

function manageMouseDown(e) {
  let img = e.target;

  console.log("e.clientX: " + e.clientX);
  console.log("e.clientY: " + e.clientY);

  console.log("e.clientX: " + e.pageX);
  console.log("e.clientY: " + e.pageY);

  console.log("img.getBoundingClientRect().left: " + img.getBoundingClientRect().left);
  console.log("img.getBoundingClientRect().top: " + img.getBoundingClientRect().top);

  let xOffset = e.clientX - img.getBoundingClientRect().left;
  let yOffset = e.clientY - img.getBoundingClientRect().top;

  console.log("xOffset: " + xOffset);
  console.log("yOffset: " + yOffset);

  img.style.position = 'absolute';
  img.style.zIndex = 500;

  document.body.append(img);

  moveElement(e.pageX, e.pageY);

  function moveElement(pageX, pageY) {
    img.style.left = pageX - xOffset + 'px';
    img.style.top = pageY - yOffset + 'px';
  }

  function manageMouseMove(e) {
    moveElement(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', manageMouseMove);

  function manageMouseUp(e) {
    console.log(this);
    document.removeEventListener('mousemove', manageMouseMove);
    //this.onmouseup = null;

    this.hidden = true;
    let elementUnderItem = document.elementFromPoint(e.clientX, e.clientY);
    this.hidden = false;

    if (!elementUnderItem) return;

    let hostElement = elementUnderItem.closest('.dr');

    console.log(hostElement);
    console.log(elementUnderItem)

    hostElement.append(img);
    img.setAttribute("style", "");
  };

  img.addEventListener("mouseup", manageMouseUp, {once: true})
};

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

    resetContainer();
    getData(pageCounterParam);
  }
}

//https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
function setCustomFormValidation()
{
    const nomeText = document.getElementById("nomeText");
    const emailText = document.getElementById("emailText");

    nomeText.addEventListener('input', (e) => {
        // Each time the user types something, we check if the
        // form fields are valid.
      
      nomeText.setCustomValidity("");

      if(nomeText.value.includes("aaa"))
      {
          nomeText.setCustomValidity("troppe a");
          console.log("Troppe a!");
          return
      }

      if(nomeText.value.includes("bbb"))
      {
          nomeText.setCustomValidity("troppe b");
          console.log("Troppe b!");
          return
      }
    });

    // esercizio: aggiungere eventListener al campo mail
    emailText.addEventListener('input', (e) => {
      if (emailText.validity.valid) {
        console.log("mail valida!");
        return
      }
      else if (emailText.validity.typeMismatch) {
        console.log("I am expecting an email address!");
        return;
      }   
    })
    return
}

//esercizio->richiamo funzione
/* function checkForm(Formdata) {
  if(errore) {
    return false
  }
  if(errore) {
    return false
  }
  if(errore) {
    return false
  }
  return true
} */

function setJsonForm()
{
    const flexForm = document.querySelector(".flexForm");

    flexForm.addEventListener('submit', e => {
    //flexForm.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(flexForm);
        const path = 'https://fakestoreapi.com/users'//'server/data2.php';
        const objectData = Object.fromEntries(formData.entries());

        console.dir(objectData);
        for(let [name, value] of formData) {
            console.log(`${name} = ${value}`);
        }

        //esercizio:
        // abilitare questa checkForm con validazione personalizzata con javascript VANILLA
        // inibire validazione html, deve pesare tutto sulla checkForm
        /* if(checkForm(formData)) {
          //invio dati
        }
        else {
          //dico all'utente che qualcosa è andato storto
          return false //blocchiamo tutta la funzione SETJSONFORM
        } */

        // VESIONE FETCH API
        /* const formPromise = fetch(path, {
            method: 'POST',
            headers: {
                'Accept': 'application/json', //non riguarda ciò che invii al server, ma ciò che vuoi ricevere indietro.
                //'Content-Type': 'multipart/form-data'
                'Content-Type': 'application/json;charset=utf-8', //serve a dire al server che il corpo della richiesta (request body) contiene dati in formato JSON e che il testo è codificato con il set di caratteri UTF-8.
            },
            body: JSON.stringify(objectData)
        })

        formPromise.then(response => response.json())
        .then(data => {
            console.log(data);
            //buildResponseInterface(JSON.stringify(data));
        })
        .catch(error => {
            console.log(error)
            //buildResponseInterface(error);
        }); */

        // VESIONE AXIOS THEN-CATCH
        axios({
            method: "post",
            url: path,
            data: formData, //JSON.stringify(objectData)
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        })
        .then(function (data) {
            console.log(data);
            console.log(data.data);
            //buildResponseInterface(JSON.stringify(data.data));
        })
        .catch(function (error) {
            console.log(error)
            //buildResponseInterface(error);
        });

        // VERSIONE ASYNC-AWAIT
        /*try {
          const response = await axios({
            method: "post",
            url: path,
            data: formData,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });

            console.log(response);
            console.log(response.data);
            // buildResponseInterface(JSON.stringify(response.data));
          } catch (error) {
            console.log(error);
            // buildResponseInterface(error);
          }*/
    });  
}

const pageLoaded = () => {
  let dataButton = document.querySelector("#dataButton");

  dataButton.addEventListener("click", e => {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);
  });

  /*//2.
  dataButton.addEventListener("click", e => {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);
  }, {once: true});*/

  //3.
  //dataButton.addEventListener("click", manageClick);

  let p1 = document.querySelector("#p1");
  let padreDeiP = document.querySelector("#padreDeiP");
  let nonnoDeiP = document.querySelector("#nonnoDeiP");

  /*//1.
  nonnoDeiP.addEventListener("click", manageClick2 );
  nonnoDeiP.addEventListener("click", manageClick3 );*/

  /*//2.
  padreDeiP.addEventListener("click", manageClick2 );
  nonnoDeiP.addEventListener("click", manageClick2 );*/

  /*//3.
  p1.addEventListener("click", manageClick2 );
  padreDeiP.addEventListener("click", manageClick2 );
  nonnoDeiP.addEventListener("click", manageClick2 );*/

  /*//4.
  p1.addEventListener("click", manageClick2);
  padreDeiP.addEventListener("click", manageClick2);
  nonnoDeiP.addEventListener("click", manageClick2);
  //p1.addEventListener("click", manageClick2, true);
  padreDeiP.addEventListener("click", manageClick2, true); //{capture: true}
  nonnoDeiP.addEventListener("click", manageClick2, true);*/

  /*//5.
  p1.addEventListener("click", clickManager);
  padreDeiP.addEventListener("click", clickManager);
  nonnoDeiP.addEventListener("click", clickManager);
  padreDeiP.addEventListener("click", clickManager, true);
  nonnoDeiP.addEventListener("click", clickManager, true);*/

  //6.
  //p1.addEventListener("click", (e) => passValue(e, "1001"));

  //intervalID = setInterval(setLetter2, 100, "pTitolo", "All the colleagues!");

  //bannerIntervalID = setInterval(setBanner, 3000);
  //setJsonForm();
  setCustomFormValidation();
};

function manageClick(e) {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);

    e.target.removeEventListener("click", manageClick);
}

function manageClick2(e) {
  console.log("-----------");
  console.log("CLICCATO 1");
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(this);
  console.log(e.type);
  console.log(e.eventPhase);
  console.log("-----------");
}

function manageClick3(e) {
  console.log("-----------");
  console.log("CLICCATO 2");
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(this);
  console.log(e.type);
  console.log(e.eventPhase);
  console.log("-----------");
}

let clickManager = {
  handleEvent(e) {
    console.log("-----------");
    console.log("CLICCATO 3");
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(this);
    console.log(e.type);
    console.log(e.eventPhase);
    console.log("-----------");
  }
};

function passValue(e, v) {
  console.dir(e);
  console.log(v);
}

//Begin Laboratorio: creazione di banner pubblicitari temporizzati.
const setBanner = () => {
  removeBanner();
  buildBanner();
}

const removeBanner = () => {
  const bannerSection = document.getElementById("bannerSection");

  bannerSection.innerHTML = "";
}

//const buildBanner = (title, imageSrc, imageAlt, description) => {
const buildBanner = () => {
  //removeBanner();

  const bannerCompany = banners[bannersCounter];

  console.dir(bannerCompany);

  const bannerSection = document.getElementById("bannerSection");
  const banner = document.createElement("section");

  banner.className = "rowSection aqua";

  //x\" onerror="alert(\'Ti ho fregato!\
  const img = DOMPurify.sanitize(`<img src="${bannerCompany.imageSrc}" alt="${bannerCompany.imageAlt}" width="200px" height="200px" />`);

  const innerSection = document.createElement("section");
  innerSection.className = "columnSection pBlue";
  
  const h2 = DOMPurify.sanitize(`<h2>${bannerCompany.title}</h2>`);
  const p = DOMPurify.sanitize(`<p>${bannerCompany.description}</p>`);

  innerSection.innerHTML = h2;
  innerSection.innerHTML += p;

  banner.innerHTML = img;
  banner.append(innerSection);
  
  bannerSection.append(banner);

  if(bannersCounter<banners.length - 1)
  {
    bannersCounter++;
    console.log("bannersCounter: " + bannersCounter);
  }
  else
  {
    bannersCounter = 0;
  }
}
//End Laboratorio: creazione di banner pubblicitari temporizzati.

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

//window.onload = () => pageLoaded();
window.addEventListener("load", (e) => {
  console.log("load!");
  
  console.dir(e);

  checkImageInfo("load");

  pageLoaded();
});