'use strict';
/*
// let hasDriverLicense = false ;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('i can drive');

// const interface = 'Audio';    //Examples of reserved
// const private = 543;

function logger() {
console.log(`my name is sarah`)
}
logger();                    //invoking, running, or calling the function.
// logger();

function fruitProcessor(apples,oranges) {
    // console.log(apples, oranges);
const juice = `juice with ${apples} apples and ${oranges} oranges.`
return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//function declaration
// function calAge1 (birthYear){
// const age = 2037 - birthYear;
// return age;
// }
function calAge1(birthYear){
    return 2037 - birthYear
}
const age1 = calAge1(1991); //Can be called before defined.

//Function expressions
const calAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calAge2(1991);

//Arrow Function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "sarah"));


//Functions calling another functions
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
}
console.log(fruitProcessor(2, 3));

const calAge = function (birthYear){
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement
    }else {
        console.log(`${firstName} has already retired`);
    return -1;
 }
}
console.log(yearsUntilRetirement(1991, "sarah"));
console.log(yearsUntilRetirement(1960, "john"));
*/