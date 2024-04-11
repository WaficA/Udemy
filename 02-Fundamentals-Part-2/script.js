'use strict';

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
logger();

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

