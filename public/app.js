"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    },
};
// console.log(me);
// console.log(me.speak('hello, world'));
var geetPerson = function (person) {
    console.log(person.name);
    console.log(person.age);
    person.speak('hello, world');
};
geetPerson(me);
