
//0
alert('ciao!');
console.log('Ciao!') // console astrae la console del browser


//1
let saluto; //dichiarazione di variabile con 'let'; dentro ci sarà tipo di dato detto UNDEFINED (è un tipo come float, bool, ecc)
console.log(saluto);
saluto = " Ciao! come va?"; // qui stiamo assegnando dati/valori alla variabile -> non più undefined
console.log(saluto);


//2
let nome = 'Michelangelo';
let cognome = 'Stega';
console.log(nome + ' ' + cognome); // l'elemento '+' è il CONCATENATORE di stringhe


//3
const VERDE = 0x00FF00;  // usando CONST definiamo un contenitore NON MODIFICABILE (no case sensitive)
const ROSSO = 0xFF0000; // nomi in maiuscolo perchè in genere le costanti si scrivono così (convenzione)
const BLU = 0x0000FF; // equivale a: (0, 0, 255) 24bit 2^24 = totale dei colori possibili

VERDE = 3; // questo è un errore
