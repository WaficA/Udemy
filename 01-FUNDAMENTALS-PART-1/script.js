/* MULTI LINE COMMENT
let js = 'amazing';
//console.log(40 + 10 + 10);

console.log('jonas');
console.log(23);

let firstName = "Mike";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let Mike_Nikita = "MN";
let $function = 27;
//don't use name as variable for it is a keyword though its legal to use.
//don't start with capital letters.(will be used for object oriented programming).
//make sure your variable names are descriptive.

let PI = 3.1415; //all UPPER for its a constant (convention of writing all in upper).

let myFirstJob = 'teacher';
let job2 = 'programmer';//not descriptive example

//Assignment Values and Variables

let country = "Lebanon";
let continent = "asia";
let population = "three million";
console.log(country, continent, population);

// 7 primitive data types Number/String/Boolean/Undefined/Null/Symbol(ES2015)/BigInt(ES2020)



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 12);
console.log(typeof "nikita");

javaScriptIsFun = "yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year)

let age = 30  //block scoped
age = 31;

const birthDate = 1990;  //better use as default
//birthDate = 1999;  

var job = "programmer";  //function scoped
job = "teacher";

const now=2037;
const ageTrinity = now-1991;
const ageSarah = now-2018;
console.log(ageTrinity,ageSarah);

//console.log(ageTrinity*2, ageSarah/10, 2**3);

const fistName = "Nikita";
const lastName = " Traves";
console.log(fistName+lastName); //concatenate

//Assignment operators
let x = 10 +5;
x += 10; // x = x + 10;
x *= 10;
x ++; // x = x + 1;
x --; // x = x - 1;
console.log(x);

//Comparison Operators
console.log(ageSarah > ageTrinity); // >, <, >=, <=
console.log(ageTrinity >= 18);

const isFullAge = ageTrinity >= 18;

console.log(now - 1991 > now -2018);

const now = 2037;
const ageTrinity = now-1991;
const ageSarah = now-2018;

console.log(now - 1991 > now -2018);

console.log(25 -10 -5); // left to right execution example

let x, y; // holding value undefined
x = y = 25 - 10 - 5 ;
console.log(x, y);


const averageAge = (ageSarah + ageTrinity) / 2;
console.log(ageSarah, ageTrinity, averageAge);

const firstName = 'Sarah';
const job = 'Operation manager';
const birthYear = 1989;
const year = 2024;

const Sarah = "i'm " + firstName + ", a " + (year-birthYear) + " years old " + job +"!";
console.log(Sarah);

//Template literal
const sarahNew = `i'm ${firstName}, a ${year-birthYear}, years old ${job}!`;
console.log(sarahNew);

console.log(`just a regular string`);

console.log('string \n\ with multiple \n\ lines');

console.log(`string with
multiple
lines`);

*/

const age = 15;
// if else control structure. Conditions and blocks.
if(age >= 18){
console.log(`sarah can start driving`);
} else {
    const yearsLeft = 18 -age;
    console.log(`she cannot drive, she has ${yearsLeft} years left!`);
}


const birthYear = 2012;
let century;
if(birthYear <= 2000) {
 century = 20;
} else {
 century = 21;
}
console.log(century);








