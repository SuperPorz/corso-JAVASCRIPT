'use strict'

/* //1.
console.log('1 ----------------------------------------------------------');
const paragraph1 = document.getElementById('p1');
console.log(paragraph1);

const paragraph4 = document.getElementById('p4-paragrafo');
console.log(paragraph4);

const _ciccio = document.getElementById('_ciccio');
console.log(_ciccio);

console.log(_ciccio.firstChild); */


/* //2. prendiamo tutti i P del documento e gli cambiamo attributo ID e aggiungiamo una CLASSE
console.log('2 ----------------------------------------------------------');
let paragraphs = document.querySelectorAll('p');

let i = 0;
for(const paragraph of paragraphs)
{
    console.log(paragraph);

    paragraph.textContent = "Ciccio";
    paragraph.classList.add("yellow");
    paragraph.id = "para_" + i;
    i++;
} */


/* //3. prendiamo solo i P figli diretti di un DIV
console.log('3 ----------------------------------------------------------');
let paragraphs = document.querySelectorAll('div > p');

for(const paragraph of paragraphs)
{
    console.log(paragraph);
} */


/* //4.
console.log('4 ----------------------------------------------------------');
//let paragraphs = document.querySelectorAll('p:nth-of-type(even)'); //2n.
let paragraphs = document.querySelectorAll('p:nth-of-type(odd)'); //2n+1.

for(const paragraph of paragraphs)
{
    console.log(paragraph);
} */


/* //5.
console.log('5 ----------------------------------------------------------');
let paragraphs = document.querySelectorAll('p:not(div.red > p, p.red)');

for(const paragraph of paragraphs)
{
    console.log(paragraph);

    paragraph.className = "yellow fattish";
} */


/* //6.
console.log('6 ----------------------------------------------------------');
//let paragraphs = document.querySelectorAll('#div1 > p:nth-of-type(odd)');
let paragraphs = document.querySelectorAll('#div1 > p');

for (const paragraph of paragraphs)
{
    paragraph.classList.add("yellow");
} */


/* //7.
console.log('7 ----------------------------------------------------------');
let paragraphs = document.querySelectorAll('p.red');

for (const paragraph of paragraphs)
{
    console.log(paragraph);

    //paragraph.className = "yellow";
    //paragraph.classList.add("yellow");
    paragraph.setAttribute("class", "yellow fattish");
} */


//8.
console.log('8 ----------------------------------------------------------');

function addSpans()
{
    const div3 = document.getElementById("div3");
    div3.innerHTML += "<span><strong>SPAN 1!</strong></span>";
    // div3.innerHTML += "<span>SPAN 2!</span>";
}

function addSpans2()
{
    const div3 = document.getElementById("div3");

    const span1 = document.createElement("span");
    const text1 = document.createTextNode("SPAN 1000!");
    //text1.data = "SPAN 1!";

    const span2 = document.createElement("span");
    
    span1.append(text1);

    span2.textContent = "SPAN 2!";

    div3.append(span1);
    div3.append(span2);
}

function showUs() {
    const lucaBonacorsi = {
        nome: "Luca",
        cognome: "Bonacorsi",
        paeseDiResidenza: "Reggio Emilia",
        anni: 50,
    }
    
    const A = {
        nome: 'A',
        cognome: 'A',
        paeseDiResidenza: 'Padova',
        anni: 30, 
    }
        
    const B = {
        nome: "B",
        cognome:  "B",
        paeseDiResidenza: "Campania",
        anni: 19,
    }
    
    const C = {
        nome: "C",
        cognome: "C",
        paeseDiResidenza: "Lombardia",
        anni: 32,
    }
    
    const D = {
        nome: "D",
        cognome: "D",
        paeseDiResidenza: "Lucca",
        anni: 22,
    }
    
    const E = {
        nome: "E",
        cognome: "E",
        paeseDiResidenza: "La Spezia",
        anni: 28,
    }
        
    const F = {
        nome: "F",
        cognome: "F",
        paeseDiResidenza: "Bisceglie",
        anni: 40,
    }
    
    const G = {
        nome: "G",
        cognome: "G",
        paeseDiResidenza: "Torino",
        anni: 30,
    }

    const H = {
        nome: "H",
        cognome: "H",
        paeseDiResidenza: "Cagliari",
        anni: 27,
    }
        
    const I = {
        nome: "I",
        cognome: "I",
        paeseDiResidenza: "Veneto",
        anni: 35,
    }

    const L = {
        nome: "L",
        cognome: "L",
        paeseDiResidenza: "Veneto",
        anni: 35,
    }

    // const tizioCaio = new Object();
    // tizioCaio.nome = "tizio";
    // tizioCaio.cognome = "caio";

    // const tizio2Caio2 = {
    //     nome: "tizio2",
    //     cognome: "caio2",
    // };

    const us = [
        lucaBonacorsi, //[0]            nome,   cognome,    paeseDiResidenza,   anni
        A, //[1]        
        B, //[2]
        C, //[3]
        D, //[4]
        E, //[5]
        F, //[6]
        G, //[7]
        H, //[8]
        I, //[9]
        L, //[10]
    ];

    // console.log(us[0].paeseDiResidenza);
    // console.log(lucaBonacorsi.paeseDiResidenza);

    // console.log(us[8].paeseDiResidenza);
    // console.log(us[4].nome + " " + us[4].cognome);

    const div3 = document.querySelector("#div3");

    let counter = 0;
    for (let i of us)
    {
        console.log(i);

        const p = document.createElement("p");

        if(counter % 2 == 0)
        {
            p.classList.add("yellow");
        }
        else
        {
            p.classList.add("red");
        }

        p.classList.add("fattish");

        p.textContent = i.nome + " " + i.cognome;

        div3.append(p);
        counter++;
    }
}
