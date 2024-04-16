'use strict';
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
GOOD LUCK 😀



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
};
console.log(calcTip(100));

const bill = [125, 555, 44];

const tips = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];

const total = [tips[0] + bill[0],tips[1] + bill[1],tips[2] + bill[2]];  
console.log(bill,tips,total);

const totals = [bill[0] + calcTip(bill[0]),bill[1] + calcTip(bill[1]),bill[2] + calcTip(bill[2])];
console.log(bill,tips,totals); // Same as above.

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
        */
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        



