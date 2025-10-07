import { person } from "./data.js";
import { average, getDoubles, getSquares } from "./math.js";

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
