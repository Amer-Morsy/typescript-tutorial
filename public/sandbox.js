"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('John', 'Hello');
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(20, 5, 'add'));
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails({ name: 'John', age: 30 });
