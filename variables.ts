let name: string = "Ansh";

name = 6; // throw error because only string is allowed

// OR

let num = 6;

console.log(num.toLowerCase())  // throw an error because number cannot has a lower case

console.log(name)

// Boolean

let isLoggedIn: boolean = true;

// Any

let age: any = 20;
age = "20";
age = true;

// no error is thrown here

export {};