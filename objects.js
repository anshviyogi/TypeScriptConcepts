"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  name: "Ansh",
  email: "ansh@gmail.com",
  isActive: true,
};
function createUser(_a) {
  var string = _a.name,
    boolean = _a.isPaid;
}
createUser({ name: "Ansh", isPaid: true });
function createCourse() {
  return { name: "ReactJs", price: 399 };
}
function createType(ty) {}
function some(a) {}
some(true);
some(20);
some("ansh");
createType({ name: "Ansh", age: 20, isPrime: false });
var myObj = {
  id: "123",
  name: "Ansh",
};
console.log(myObj);
