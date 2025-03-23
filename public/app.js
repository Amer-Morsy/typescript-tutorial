"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
//#endregion classes
//#region app
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    var values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, 'end');
});
//#endregion  app
//#region GENERICS
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
var book = {
    uid: 1,
    type: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
var film = {
    uid: 1,
    type: ResourceType.FILM,
    data: { title: 'name of the wind' }
};
console.log(book, film);
//#endregion GENERICS
// TUPLES
var arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
var tup = ['ryu', 25, true];
// tup[0] = 20; // error
tup[0] = 'ken';
var student;
student = ['chun-li', 223423]; // correct
// student = [223423, 'chun-li']; // error
