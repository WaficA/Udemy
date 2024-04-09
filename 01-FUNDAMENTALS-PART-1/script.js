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


// Type Conversion
const inputYear = '1991';
console.log (Number(inputYear) + 18)
console.log(inputYear + 18); //inputYear is still a string

console.log(Number('jonas')); //console output will be NAN(not a number{as invalid number})
console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log('I am '+ 23 +" years old"); //operation between string and number. Number will be converted to string.
console.log('I am '+ '23' +" years old"); // same as above 
console.log('23'-'10'-3); //- operator triggers opposite
console.log("23" * "2"); // console will be a number

let n = "1" + 1;   //11 as a string
n = n- 1;          //11 - 1 = 10 a number
console.log(n);    // will be 10.


//Truthy and Falsy Values
//5 falsy values: 0,'',undefined,null,Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('sarah'));
console.log(Boolean({})); //Empty Object
console.log(Boolean(''));

const money = 0;
if (money){
    console.log(`Don't spend it all`)
} else {
    console.log(`you should get a job`)
};


let height = 1;
if(height){
    console.log(`its defined`)
}else {
    console.log(`It's Undefined`)
};

// equality operators
const age = 18;
if(age === 18) console.log(`you just became an adult!(strict)`); //strict
if (age == '18') console.log(`you just became an adult!(loose)`); //loose

const favorite = Number(prompt(`Enter a number`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23){ 
    console.log(`the number 23 is your lucky number!`)
}else if (favorite === 7){
    console.log('this is another lucky number')
} else {
    console.log (`try again...`)
};

if (favorite !== 23) console.log(`try 23`);


//Boolean logic. The AND, OR & NOT operators. Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);   //And
console.log(hasDriversLicense || hasGoodVision);   //Or
console.log(!hasDriversLicense || hasGoodVision);  //Not

//const shouldDrive = hasDriversLicense && hasGoodVision;
// if (hasDriversLicense && hasGoodVision){
//     console.log(`sarah is able to drive`);
// } else {
//     console.log(`someone else should drive`)
// };

const isTired = true; 
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log(`sarah is able to drive`);
} else {
    console.log(`someone else should drive`)
};

//Switch Statement
const day = 'sunday';

switch(day) {
    case 'monday':
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos')    ;
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record Videos');        ;
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break        ;
    default:
            console.log('Not a valid entry');
}

if(day === 'monday'){
    console.log(`plan my course structure`);
    console.log('Go to coding meetup');
}else if (day === 'tuesday'){
    console.log(`prepare theory videos`);
}else if(day === 'wednesday' || day === 'thursday'){
console.log('write code examples')
}else if (day === "friday"){
    console.log('Record Videos');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('enjoy the weekend');
}else console.log('Not a valid entry')



3 + 4 
1991
true && false && !false

if (23>10){
    const str = "23 is bigger";
}

const me = "jonas";
console.log(`i'm ${2037 - 1991} years old ${me}`)


//Ternary operator. The conditional operator

const age = 23;
// age >= 18 ? console.log(`i like to drink wine`) : console.log(`id like to drink water`);

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// }else {
//     drink2 = 'water';
// };
// console.log(drink2)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/



























