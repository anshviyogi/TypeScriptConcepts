"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(word) {
    return word.toUpperCase();
}
function signUp(name, age, isPaid) {
    console.log(name, age, isPaid);
}
// same with arrow function
var signUpArrow = function (name, age, isPaid) {
    console.log(name, age, isPaid);
};
getUpper("Ansh");
addTwo(5);
signUp("Ansh", 20, false);
signUpArrow("Ansh", 20, false);
function testFunc(number) {
    return number + 1 + 2;
}
var getHello = function (name) {
    return name;
};
