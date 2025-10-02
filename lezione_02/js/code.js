//1
let nome = "Marco";
let anni = 65;
let mesi = 5.4;

console.log(anni);
console.log(typeof nome);
console.log(typeof anni); // in JS: un solo tipo numerico: 'number', quindi no INT/FLOAT ecc; standard IEEE 754 8byte (64bit)
// console.log(typeof mesi); // questo restituisce sempre 'number' ->lettura su wikipedia IEEE 754


//2
let a = 5;
let b = 6;
let c = 3;
let result1 = a + b;
let result2 = a - b;
let result3 = a * b;
let result4 = a / b;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


//3
if ((8-6.4) === 1.6){   // mai confrontare numeri foat con '==' ---> ci sono altri modi // VALE PER TUTTI I LINGUAGGI
    console.log('Ok!');
} else {
    console.log('KO!'); // esempio di soluzione: limitare il confronto a un numero + piccolo di cifre decimali
}                       // altra soluzione: concetto di TOLLERANZA
console.log((8-6.4));
console.log((1.6));

console.log(1.5999999999999996 - 1.6); // ottengo: -0.0000000000000004440892098500626
console.log(1.6 - 1.5999999999999996); // ottengo: +0.0000000000000004440892098500626

console.log(Math.abs(1.5999999999999996 - 1.6)); // ottengo lo stesso numero in entrambe le righe
console.log(Math.abs(1.6 - 1.5999999999999996));

let tolleranza = .0000000000001;
if ((8-6.4) - 1.6 < tolleranza) 
    {   
    console.log('Ok!');
    } 
else 
    {
    console.log('KO!'); 
    }   


//4
let n3 = 2.456789;
console.log(n3.toFixed(3)); // meglio usare la tolleranza perchè la definiamo noi

//esercizio. prendere 2 numeri a caso con virgola mobile e determinarne la tolleranza, poi confrontarli


//scaricare estensione: live server di Ritwick Dey
