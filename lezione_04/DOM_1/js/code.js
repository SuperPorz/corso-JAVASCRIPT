'use strict';

/* //1
console.log('*1-------------------------------------------------------------');
console.log(document); // accedi al DOM

//2
console.log('*2-------------------------------------------------------------');
console.log(document.documentElement); //punta a <html></html>, cioè il primo elemento

//3
console.log('*3-------------------------------------------------------------');
console.log(document.head); //punta a <head></head>

//4
console.log('*4-------------------------------------------------------------');
console.log(document.body); //punta a <body></body>

//5
console.log('*5-------------------------------------------------------------');
console.log(document.body.childNodes.length); // conta i NODI figli di BODY; childNodes non è un array, è una COLLECTION: 
// ha gli indici, è iterabile, assomiglia ad un array...MA NON E' UN OGGETTO ARRAY E QUINDI NON SI POSSONO USARE METODI!!!

//il primo figlio del body è lo spazio da <body> ...spazi ... <h1>


//6
console.log('*6-------------------------------------------------------------');
for(let i = 0; i < document.body.childNodes.length; i++)
{
    console.log(document.body.childNodes[i]);
} */

/* //8  --> siamo nel primo livello del traversing del DOM
console.log('*8-------------------------------------------------------------');
console.log(document.body.firstChild); // questa riga e quella dopo, puntano allo stesso elemento, 2 modi di fare la stessa cosa
console.log(document.body.childNodes[0]);
console.log(document.body.firstChild === document.body.childNodes[0]); //confrontiamoli proprio: ritorna true

console.log(document.body.lastChild); //questa riga e quella dopo, puntano allo stesso elemento, 2 modi di fare la stessa cosa
console.log(document.body.childNodes[document.body.childNodes.length - 1]);
console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1]);

console.log(document.body.lastChild.previousSibling);

//9 
console.log('*9-------------------------------------------------------------');
console.log(document.body.firstChild.firstChild); // document.body.firstChild NON HA FIGLI, quindi la riga restituisce NULL!!!
console.log(document.body.firstChild.lastChild); // come prima, essendo foglia, non ci sono figli

//10
console.log("10 ----------------------------------------------------");
console.log(document.body.previousSibling); //text.
console.log(document.body.nextSibling); //null --> dopo il body non ci può essere nessun nodo, per regola HTML, quindi NULL 

console.log(document.body.lastChild.previousSibling); //dovrebbe restituire commento, ma causa LIVE-SERVER restituisce script
console.log(document.body.firstChild.nextSibling); //H1.

console.log(document.body.parentNode); // HTML
console.log(document.documentElement === document.body.parentNode); */

/* // ------- esercizi interattivi in classe --------------

//10bis ---> arrivare a "LOREM IPSUM 1"
console.log(document.body.childNodes[3].childNodes[1].childNodes[3].childNodes[0]);

//11 ---> arrivare a "prima section in article"
console.log(document.body.childNodes[3].childNodes[3]);

//11bis ---> arrivare a "white space prima della chiusura di ARTICLE"
console.log(document.body.childNodes[3].lastChild); */


/* //12.
console.log("12 ----------------------------------------------------");

for(const currentChild of document.body.childNodes) // currentChild conterrà i childNodes, ragionare sul "const" 
{
    //console.log(currentChild);

    //Node.ELEMENT_NODE == 1. ---> valori presi dalla guida di JS
    //Node.TEXT_NODE == 3.
    //Node.COMMENT_NODE == 8.

    //const currentNode = document.body.childNodes[currentChild];
    
    const tipoDiNodo = currentChild.nodeType;
    const nomeDelNodo = currentChild.nodeName;

    console.log('Tipo di nodo = ' + tipoDiNodo);
    console.log('Nome del nodo = ' + nomeDelNodo);

    if(tipoDiNodo === Node.ELEMENT_NODE || tipoDiNodo === Node.COMMENT_NODE)
    {
        console.log("Il nodo corrente è = " + currentChild);
    }
} */


// prossima lezione: step successivo 2nd livello del TRAVERSING

//13.
/* console.log("13 ----------------------------------------------------");

for (const currentChild in document.body.childNodes) // scrive gli indici dentro currentChild, quindi ciclo FOR IN != da ciclo FOR OF
{
    //Node.ELEMENT_NODE == 1.
    //Node.TEXT_NODE == 3.
    //Node.COMMENT_NODE == 8.

    const currentNode = document.body.childNodes[currentChild];
    
    const tipoDiNodo = currentNode.nodeType;
    const nomeDelNodo = currentNode.nodeName;

    console.log('Tipo di nodo = ' + tipoDiNodo);
    console.log('Nome del nodo = ' + nomeDelNodo);

    if(tipoDiNodo === Node.ELEMENT_NODE || tipoDiNodo === Node.COMMENT_NODE)
    {
        console.log("AAAAAZZZZZZ " + currentChild + " = " + currentNode);
    }
} */





// SECONDO LIVELLO DI TRAVERSING (si fa un filtro sugli elementi traversati, questo rappresenta il 2nd livello)

//1
/* console.log("1---------------------------------------");

for (let i = 0; i < document.body.children.length; i++) {

    console.log(document.body.children[i]); // children fa un filtro e recupera solo gli oggetti di tipo ELEMENTO (Node.ELEMENT_NODE == 1)
} */


//2
/* console.log("2---------------------------------------")

console.log(document.body.firstElementChild); // dovrebbe restituire "h1"
console.log(document.body.children[0]); // dovrebbe restituire H1
console.log(document.body.firstElementChild === document.body.children[0]); //boolean true

console.log(document.body.lastElementChild); // dovrebbe dare "script"
console.log(document.body.children[document.body.children.length - 1]) // sempre script, perchè prendiamo la lunghezza -1, cioè ultimo elemento 
console.log(document.body.lastElementChild === document.body.children[document.body.children.length -1]) // true */


//3
/* console.log("3---------------------------------------")
console.log(document.body.firstElementChild.firstChild) // restituisce un oggetto text, il contenuto di h1 "titolo pagina"
console.log(firstElementChild.firstChild.firstChild) // errore, nessun figlio */

//4
/* console.log("4---------------------------------------")
console.log(document.body.previousElementSibling); // HEAD
console.log(document.body.nextElementSibling); // nulla?

console.log(document.body.lastElementChild.previousSibling); // text con spazi: punta a script poi al text con spazi bianchi 
console.log(document.body.firstElementChild.nextSibling); // punta ad h1 e poi al fratello successivo di tipo generico, quindi spazi bianchi

console.dir(document.body.parentNode); // HTML 
console.dir(document.body.parentElement); // HTML
console.log(document.body.parentNode === document.body.parentElement); // true
console.log(document.documentElement === document.body.parentElement); // true

console.log(document.documentElement); // //HTML punta direttamente al nodo radice
console.log(document.documentElement.parentNode); // c'è un padre, di tipo proprio "document", è un oggetto
console.log(document.parentElement); // null, non ci sono padri di tipo elemento */

//9
//https://dom.spec.whatwg.org/#node
//EssereVivente <- Animale <- EssereUmano.
//EssereVivente <- Animale <- Mammifero <- EssereUmano.
//EssereVivente <- Pianta <- SalicePiangente.

//relazione ereditaria di JS:
//Object <- EventTarget <- Node <- Element <- HTMLElement <- HTMLHeadingElement, HTMLParagraphElement, HTMLBodyElement, HTMLScriptElement, ecc.
//Object <- EventTarget <- Node <- CharacterData <- Text, Comment.

//10
console.log("10---------------------------------------")
console.log(document.body.firstElementChild instanceof HTMLParagraphElement); //punta ad h1 --> è un'istanza della classe Paragrafo? --> false
console.log(document.body.firstElementChild instanceof HTMLHeadingElement); //punta ad h1 --> è un'istanza della classe HEADING? --> true
// heading: h1, h2, h3, h4, h5, h6 STOP

//test1
const p = document.body.children[1].children[0].children[1];
p.align = 'center';
console.log(p);

//test2
if (p instanceof HTMLParagraphElement) {
    p.align = 'center';
    p.hidden = false;
    p.id = 'paragrafetto';
    console.log(p);
}




// TERZO LIVELLO DI TRAVERSING: facciamo fare al browser la ricerca di quello che ci serve (con una funzione built-in)

const p2 = document.getElementById('paragrafetto');
console.log(p === p2);

p2.textContent = 'Ciccio';





