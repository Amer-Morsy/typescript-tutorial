"use strict";
let greet = () => {
    console.log('Hello, World!');
};
greet(); // Hello, World!
// greet = 'Hello, World!'; // Error: Type 'string' is not assignable to type 'Function'.
greet = () => {
    console.log('Hello, Again!');
};
greet(); // Hello, Again!
const add = (a, b, c /*?*/ = 0) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10); // 15, 0
add(5, 10, '20'); // 15, 20
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result); // 3
