'use strict';

//0 #########################################################################
/* let nomi = [ ]; // questo è un array vuoto
nomi.push('luca');
nomi.push('stefania');
nomi.push('paolo');

console.log(nomi);
console.log(nomi[2]);

for(let i = 0; i < nomi.length; i++) {
    console.log(nomi[i]);
} */

//0.1 #########################################################################
/* let persona1 = { //questo è un array associativo
    nome: 'marco',
    cognome: 'rossi',
    anni: 47
}

console.log(persona1.nome);

let persona2 = { 
    nome: 'sonia',
    cognome: 'verdi',
    anni: 65
}

console.log(persona2.cognome);

let persona3 = { 
    nome: 'paolo',
    cognome: 'neri',
    anni: 22
}

console.log(persona3.anni);
////////////////////////////////////

let persone = [
    persona1,
    persona2,
    persona3
];

for (let i = 0; i < persone.length; i++) {
    console.log(persone[i].nome);
} */


//1 #########################################################################
/* let nome1 = "Carlo";
let cognome1 = "Rossi";
let indirizzo1 = "Via col Vento, 34";

let output1 = "[ " + nome1 + " " + cognome1 + " " + indirizzo1 + " ]";

console.log(output1);

let nome2 = "Gino";
let cognome2 = "Verdi";
let indirizzo2 = "Via vai, 16";

let output2 =  "[ " + nome2 + " " + cognome2 + " " + indirizzo2 + " ]";

console.log(output2);

let nome3 = "Sara";
let cognome3 = "Gialli";
let indirizzo3 = "Via per sempre, 89";

let output3 = "[ " + nome3 + " " + cognome3 + " " + indirizzo3 + " ]";

console.log(output3); */


//2 #########################################################################
/* function impostaPersona(nomeParam, cognomeParam, indirizzoParam)
{
    //2.1
    let nome = nomeParam;
    let cognome = cognomeParam;
    let indirizzo = indirizzoParam;

    let output = "[ " + nome + " " + cognome + " " + indirizzo + " ]";

    //2.2
    let output = "[ " + nomeParam + " " + cognomeParam + " " + indirizzoParam + " ]"; //in questo modo ci evitiamo di dichiarare 3 variabili locali

    return(output);
}

// console.log(nome); questo darà errore perchè la variabile 'nome' è locale e non globale

console.log(impostaPersona("Carlo", "Rossi", "Via col Vento, 34"));
console.log(impostaPersona("Gino", "Verdi", "Via vai, 16"));
console.log(impostaPersona("Sara", "Gialli", "Via per sempre, 89")); */


//3 #########################################################################
/* function mediaNumeri(n1, n2, n3)
{
    let media = (n1 + n2 + n3)/3;

    return(media);
    //return media;
}

console.log(mediaNumeri(10, 8, 3));

//rest.
function mediaNumeri2(...args)
{
    let somma = 0;
    let media = 0;

    for (let n of args)
        somma+=n;

    media = somma/args.length;

    return(media);
    //return media;
}

console.log(mediaNumeri2(10, 8, 3, 10));
console.log(mediaNumeri2(2.5, 5.5, 4, 4, 8)); 

let ref = { valore: 10 };

function modifica(r) {
  r.valore = 20;
}

modifica(ref);
console.log(ref.valore);  // 20 */

//3.1 #########################################################################
/* function mediaVotiStudenti(nome, cognome, ...args)
{
    let somma = 0;
    let media = 0;
    let message = "";

    for (let n of args)
        somma+=n;

    media = somma/args.length;

    message = "La media voti di " + nome + " " + cognome + " è: " + media;
    
    return(message);
    //return message;
}

console.log(mediaVotiStudenti("Massimo", "Bianchi", 2.5, 5.5, 4, 4, 8));
console.log(mediaVotiStudenti("Sara", "Verdi", 8, 7, 4,));

let oggi = new Date()
let giorno = oggi.getDate()
let mese = oggi.getMonth() + 1
let anno = oggi.getFullYear()
let data = giorno + "/" + mese + "/" + anno
//v1, backtick ALT + 96
console.log(`${giorno}/${mese}/${anno}`)
//v2
console.log(data) */

//4 #########################################################################
//spread
/* let min1 = Math.min(9, 3, 10, 11, 65)
console.log("min1: " + min1);

let ns = [9, 3, 10, 11, 65];
let min2 = Math.min(ns);
console.log("min2: " + min2);  //////restituisce NaN, Not a Number!!!! non si può buttare un array dentro math.min; nell'esempio prima si passa una lista di valori, poi l'array lo costruisce la funzione

let min3 = Math.min(...ns);
console.log("min3: " + min3) // qui si fa il contrario di REST, cioè si fa SPREAD: i 3 punti davanti array indicano che i numeri di NS li prendo e li passo dentro la funzione ma non come array, quindi poi la funz MIN si fa il suo array

let ns2 = [8, 2, 15, 110, 699];
let min4 = Math.min(...ns, ...ns2);
console.log("min4: " + min4);

let min5 = Math.min(111, ...ns, ...ns2, 1);
console.log("min5: " + min5);

let nsAndNs2 = [...ns, ...ns2];
console.log("nsAndNs2: " + nsAndNs2);

let nome = "luca";
let caratteriNome = [...nome]; // qui diciamo che ...nome va spacchettato e inserito dentro caratteriNome (quindi da stringa a lista non array, comunque iterabile)
console.log("caratteriNome: " + caratteriNome); //qui output sarà la stringa DESTRUTTURATA: (l, u, c, a)
console.log(Array.from(nome)); //per iterabili e array-like; Array.from significa "creami un array da (nome)" */

//RIEPILOGO
//REST: prende n elementi e li trasforma in un output di array (...elenco_elementi_NON_in_array)
//SPREAD: prende gli n elementi di un array e li separa con una virgola, quindi non restituisce array ma elenco elementi (...elenco_elementi_IN_array)


//5 (esempio su reference) #########################################################################
let a = 1;
let b = a; //mettiamo una copia di a dentro b (sono però scorrelate)
b = 2; //se tolgo questa linea, b diventa 1 in output, altrimenti restituisce 2 alla linea console.log(b)

console.log("a: " + a);
console.log("b: " + b);

let nomi = ['luca', 'paolo', 'marco'];
let nomi2 = nomi;

console.log("nomi: " + nomi);
console.log("nomi2: " + nomi2);

nomi2[0] = 'leonardo'; //tolgo luca e ci metto leonardo

console.log("nomi: " + nomi);
console.log("nomi2: " + nomi2); //anche "nomi" risulta con leonardo al posto di luca; perchè? 







