// grab DOM elements
// Document Object Model - allows us to interact with the browser using JavaScript

// set event listeners
console.log('hello world!')

//data types
//numbers
42;

//strings
let answer = '42';
let dogName = 'Benny';

console.log(`My dog's name is ${dogName}. ${dogName} is very cute. ${dogName} is seven years old.`);
// back ticks `` allow us to use ${}

//arrays
let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[0]);

//objects
let benny = {
    name: 'Benny',
    age: 7,
    breeds: ['Terrier', 'Labrador', 'Bulldog'],
};
console.log(benny);

//functions
function cheeseBurger(cheese) {
    console.log('making a cheeseburger'),
    console.log(`Cheese Choice: ${cheese}`)
};

let cheese = ['pepperjack', 'american', 'cheddar'];


function sayHello() {
    console.log('hello world from sayHello function');
}

sayHello();