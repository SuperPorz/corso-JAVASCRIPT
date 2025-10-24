"use-strict"

import banners from '../modules/banners';
import getData from '../modules/getdata';
import buildBanner from '../modules/buildbanners';
import removeBanner from '../modules/removebanner';
import setCustomFormValidation from '../modules/formvalidation';
import createSetLetter from '../modules/setletter';

//inizializzazione banners
let bannerIntervalID = null
let bannersCounter = 0;
let bannersArray = banners();

//inizializzazione scritte animate.
let intervalID = null;
let classes = ["pBlue", "pAzzurro", "pRosso", "pRosa", "pGiallo"];

//inizializzazione dati tabella Colleagues
let pageCounter = 1;
let totalPages = 0;
let isLoaded = false;

const callData = pageCounterParam => {
    if(!isLoaded) {
        isLoaded = true;

        // resetto il container
        let container = document.querySelector("#container");
        container.innerHTML = "";

        getData(pageCounterParam, isLoaded);
    }
}

const setBanner = () => {
    removeBanner();
    buildBanner(bannersArray, bannersCounter);
    
    // Incrementa il contatore per il prossimo banner
    bannersCounter = (bannersCounter + 1) % bannersArray.length;
}

const pageLoaded = () => {

    //sezione Get Colleagues
    let dataButton = document.querySelector("#dataButton");
    dataButton.addEventListener("click", e => {
        callData(pageCounter);
    });

    // sezione scritta animata
    const setLetter = createSetLetter();
    intervalID = setInterval(() => {
        setLetter("pTitolo", "CacioCavallissimo!", intervalID, classes);
    }, 100);

    //sezione banners
    bannerIntervalID = setInterval(setBanner, 3000);

    //validazione form
    setCustomFormValidation();
};

// INIZIO CARICAMENTO PAGINA
window.addEventListener("load", (e) => {
    console.log("load!");
    pageLoaded();
});