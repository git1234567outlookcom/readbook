"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function logClass(target) {
    console.log('logclass ...');
    console.log('logclass end');
}
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.saySomething = function (something) {
        return this.name + " " + this.surname + "says: " + something;
    };
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
require("reflect-metadata");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    __decorate([
        logType
    ], Demo.prototype, "attr1");
    return Demo;
}());
function logType(target, key) {
    var t = Reflect.getMetadata('design:type', target, key);
    console.log(key + " type: " + t.name);
}
