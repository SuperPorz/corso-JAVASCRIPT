"use strict";

/*//1.
console.log("1 ----------------------------------------------------");
console.log(document);


//2.
console.log("2 ----------------------------------------------------");
console.log(document.documentElement); //<HTML></HTML>.


//3.
console.log("3 ----------------------------------------------------");
console.log(document.head);


//4.
console.log("4 ----------------------------------------------------");
console.log(document.body);


//5.
console.log("5 ----------------------------------------------------");
console.log(document.body.childNodes.length);


//6.
console.log("6 ----------------------------------------------------");
for(let i = 0; i < document.body.childNodes.length; i++)
{
    //if(i % 2 != 0)
    console.log(document.body.childNodes[i]);
}*/


/*//8.
console.log("8 ----------------------------------------------------");
console.log(document.body.firstChild);
console.log(document.body.childNodes[0]);

console.log(document.body.firstChild === document.body.childNodes[0]);

console.log(document.body.lastChild);
console.log(document.body.childNodes[document.body.childNodes.length - 1]);

console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1]);

console.log(document.body.lastChild.previousSibling);


//9.
console.log("9 ----------------------------------------------------");
console.log(document.body.firstChild.firstChild);
console.log(document.body.firstChild.lastChild);


//10.
console.log("10 ----------------------------------------------------");
console.log(document.body.previousSibling); //text.
console.log(document.body.nextSibling); //null.

console.log(document.body.lastChild.previousSibling); //commento.
console.log(document.body.firstChild.nextSibling); //H1.*/

//console.log(document.body.parentNode);
//console.log(document.documentElement === document.body.parentNode);


//10 bis (ESERCIZI INTERATTIVI).
//Arrivare al testo LOREM IPSUM 1 partendo dal body.
//console.log(document.body.firstChild.nextSibling.nextSibling.nextSibling.childNodes[1].childNodes[3].firstChild);

//Arrrivare alla prima sezione dell'article dal body.
//console.log(document.body.childNodes[3].childNodes[3]);

//Arrivare all'ultimo nodo figlio di article che è un nodo testuale.
//console.log(document.body.childNodes[3].lastChild);


/*//12.
console.log("12 ----------------------------------------------------");

for(const currentChild of document.body.childNodes)
{
    //console.log(currentChild);

    //Node.ELEMENT_NODE == 1.
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
}*/

//13.
console.log("13 ----------------------------------------------------");

for (const currentChild in document.body.childNodes)
{
    //Node.ELEMENT_NODE == 1.
    //Node.TEXT_NODE == 3.
    //Node.COMMENT_NODE == 8.

    console.log('currentChild = ' + currentChild);

    const currentNode = document.body.childNodes[currentChild];
    
    const tipoDiNodo = currentNode.nodeType;
    const nomeDelNodo = currentNode.nodeName;

    console.log('Tipo di nodo = ' + tipoDiNodo);
    console.log('Nome del nodo = ' + nomeDelNodo);

    if(tipoDiNodo === Node.ELEMENT_NODE || tipoDiNodo === Node.COMMENT_NODE)
    {
        console.log("SELECTED - " + currentChild + " = " + currentNode);
    }
}