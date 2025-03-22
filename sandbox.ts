let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi'; // valid
// character = 20; // invalid

age = 40; // valid
// age = 'yoshi'; // invalid

isBlackBelt = true  // valid
// isBlackBelt = 1; // invalid

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5)); // valid
// console.log(circ('7.5')); // invalid