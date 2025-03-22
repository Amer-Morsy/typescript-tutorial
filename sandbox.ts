// arrays
let names = ['Alice', 'Bob', 'Charlie'];
// names ='Alice'; // Error

names.push('Dave'); // OK
// names.push(123); // Error
names[2] = 'Eve'; // OK
// names[2] = 456; // Error

let numbers = [1, 2, 3];

numbers.push(4); // OK
// numbers.push('Four'); // Error
numbers[2] = 5; // OK
// numbers[2] = 'Five'; // Error

let mixed = ['Alice', 1, 'Bob', 2];

mixed.push('Charlie'); // OK
mixed.push(5); // OK
// mixed.push(true); // Error
mixed[2] = 'Dave'; // OK
// mixed[2] = false; // Error

// objects
let ninja = {
  name: 'Yoshi',
  age: 30,
  belt: 'black'
};
//  ninja = true // Error

ninja.age = 40; // OK
// ninja.age = 'forty'; // Error
// ninja.skills = ['eating', 'sneaking']; // Error

ninja = {
  name: 'Yoshi',
  age: 40,
  belt: 'orange',
  // skills: ['eating', 'sneaking'] // invalid
};

