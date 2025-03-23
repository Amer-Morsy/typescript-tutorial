"use strict";
const anchor = document.createElement('a');
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('form');
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
