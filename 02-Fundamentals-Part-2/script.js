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


// Data structure
const friend1 = 'peter';
const friend2 = 'sarah';
const friend3 = 'steve';

const friends = ['peter','sarah','steve'];
console.log(friends);

const newArray = new Array(1991, 1984, 2008, 2020);
console.log(newArray);

console.log(friends[0]); // calling the first input
console.log(friends[2]);

console.log(newArray.length);
console.log(newArray[newArray.length -1]);

friends[2] = 'jay';  // can mutate arrays, while primitive values are immutable
console.log(friends);

const mixedArray = ['john', 'terre', 2037-1991, friends];
console.log(mixedArray)

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //NaN
console.log(calcAge(years[0]));

const age0 = calcAge(years[0]);
const age1 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age0, age1, age3);

const agesCalculated = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(agesCalculated);

//Basic Array Operations

const friendsBasic = ['mike', 'steve', 'peter'];

const newLength = friendsBasic.push('jay'); //Add at the end of Array.Return Length
console.log(friendsBasic);

friendsBasic.unshift('sarah'); //Add at start of array
console.log(friendsBasic);

friendsBasic.pop();  //Remove from end of Array.Return the last element.
console.log(friendsBasic)

friendsBasic.shift();
console.log(friendsBasic) //Remove from Start of Array

console.log(friendsBasic.indexOf('steve'));  //check 
console.log(friendsBasic.indexOf('sarah'));

console.log(friendsBasic.includes('sarah'));  //Test with strict equality ===
console.log(friendsBasic.includes('steve'));

if (friendsBasic.includes('sarah')){
    console.log('you have a friend called sarah')
} else console.log('you do not have sarah as friend')

const jonasArray = [
    'jonas',
    'traves',
    2037-1991,
    'teacher',
    ['peter','sarah','peter']
];

//Objects... order of properties does not matter.
const jonas = {
    firstName : 'jonas',
    lastName : 'traves',
    age : 2037-1991,
    job : 'teacher',
    friends : ['peter','sarah','peter']
};
//Dot notation
console.log(jonas.lastName);
//Bracket Notation
console.log(jonas['lastName']);

const key = 'Name';
console.log(jonas['first' + key]);


const interestedIn = prompt('What do you want to know about jonas? choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request : choose from : firstName, lastName, age, job, and friends')
}

jonas.location = 'portugal';
jonas['email'] = 'email@outlook.com'
console.log(jonas);

//Challenge 
//"jonas has 3 friends, and his best friend is called sarah"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[1]}.`);

//Objects Methods for the object contains a function
const jonas = {
    firstName : 'jonas',
    lastName : 'traves',
    birthYear : 1991,
    job : 'teacher',
    friends : ['peter','sarah','peter'],
    hasDriverLicense : true,
    
    // calcAge : function(birthYear){
        //     return 2037 - birthYear;
        // }
        
        // calcAge : function(){
            //     return 2037 - this.birthYear;
            // }
            
            calcAge : function() {
                this.age = 2037 - this.birthYear
                return this.age;
            },
            
            challenge : function(){
                return`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} drivers license`
            },
        };
        
        console.log(jonas.calcAge());
        // console.log(jonas.calcAge(1991));
        // console.log(jonas['calcAge'](1991));
        console.log(jonas.age);
        
        //challenge
        //"jonas is a 46 year old teacher, and he has a/no drivers license"
        console.log(jonas.challenge());
        // The for loop
        
        // console.log('lifting weight repetition 1');
        
        // for loop runs while condition is True.
        for (let rep = 1; rep <= 10; rep++){
            console.log(`lifting weight repetition ${rep}`);
        };
        
        const jonasArray = [
            'jonas',
            'traves',
            2037-1991,
            'teacher',
            ['peter','sarah','peter'],
            true
        ];
        
        const types =[]
        
        for (let i = 0; i < jonasArray.length; i++) {
            //Reading from Array
console.log(jonasArray[i]);

//filling types Array
// types[i] = typeof jonasArray[i];

//use push
types.push(typeof jonasArray[i]);
};

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
};
console.log(ages);

// continue and break
//only strings
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    
    console.log(jonasArray[i], typeof jonasArray[i]);
};

//only Break
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') break;
    
    console.log(jonasArray[i], typeof jonasArray[i]);
};

const jonasArray = [
    'jonas',
    'traves',
    2037-1991,
    'teacher',
    ['peter','sarah','peter'],
    true
];

//loop backwards
for(let i = jonasArray.length - 1; i>=0; i--){
    console.log(jonasArray[i]);
};

// Loops in loops
for (let exercise = 1; exercise < 4; exercise++){
    console.log(`-----------starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} : lifting weight repetition ${rep}`)
    }
};

//The While loop
// let rep = 1;
// while (rep <= 10) {
    //     console.log(`lifting weight repetition ${rep}`);
    //     rep++;
    // };
    
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    
    while (dice !== 6 ) {
        console.log(`You rolled Number ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if (dice === 6) console.log(`you won you rolled a ${dice}`);
    };
    
    */
