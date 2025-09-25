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

      if(currentProperty === "avatar")
      {
        td.innerHTML = `<img src="${currentObject[currentProperty]}" />`;
        td.className = 'interactiveTd';
        td.addEventListener("click", (e) => {
          //console.log(this);

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

    resetContainer();
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

  /*//2.
  dataButton.addEventListener("click", e => {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);
  }, {once: true});*/

  //3.
  //dataButton.addEventListener("click", manageClick);

  intervalID = setInterval(setLetter2, 1000, "pTitolo", "CacioCavallissimo!");

  bannerIntervalID = setInterval(setBanner, 3000);
  //setBanner();
};

function manageClick(e) {
    console.log("pageCounter: " + pageCounter);

    console.dir(e);

    callData(pageCounter);

    e.target.removeEventListener("click", manageClick);
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

checkImageInfo("defer");