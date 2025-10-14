import { person } from "./data.js";
import { average, getDoubles, getSquares } from "./math.js";
import * as formatterObject from "./filters.js";
import getFirstN from "./test.js";

//1
console.log("person: "+ JSON.stringify(person));

document.getElementById("personParagraph").innerHTML =
    person.name + " " + person.surname;

person.name = "Sara"; //cambia anche in code_2.js

document.getElementById("personParagraph").innerHTML =
    person.name + " " + person.surname;

//2
const costsAverage = average(100, 50, 100, 4);
console.log("costsAverage: " + costsAverage);
document.getElementById("costsAverageParagraph").innerHTML = costsAverage;

const doubles = getDoubles(5,13,44,8);
const squares = getSquares(2,4);

console.log("doubles: " + doubles);
console.log("squares: " + squares);

//3
console.log(formatterObject.getEvenNumbers(3,4,1,1,2));

//4
const N = getFirstN(1,2,1,1);
console.log({N});
const N2 = getFirstN(1,21,100,1000);
console.log({N2});
