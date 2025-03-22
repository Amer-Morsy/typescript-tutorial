let character: string = 'mario';
let age: number;
let isLoggedIn: boolean;

age = 30; // valid
// age = '30'; // invalid

isLoggedIn = true; // valid
isLoggedIn = false; // valid
// isLoggedIn = 'true'; // invalid

// arrays
let ninjas: string[] = [];
ninjas.push('shaun'); //  valid
ninjas.push('mario'); //  valid
ninjas = ['yoshi']; //  valid
// ninjas.push(10); // invalid
console.log(ninjas);

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello'); // valid
mixed.push(20); // valid
mixed.push(true); // valid
// mixed.push({ name: 'shaun' }); // invalid
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;
// uid = true; // invalid

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 }; // valid
ninjaOne = { name: 'yoshi', age: 30, belt: 'black' }; // valid
ninjaOne = []; // valid but not recommended 

let ninjaTwo: {
  name: string;
  age: number;
  belt: string;
} ;
ninjaTwo = { name: 'yoshi', age: 30, belt: 'black' }; // valid
// ninjaTwo = { name: 'yoshi', age: 30 }; // invalid
// ninjaTwo = { name: 'yoshi', age: 30, belt: 'black', skills: [] }; // invalid
