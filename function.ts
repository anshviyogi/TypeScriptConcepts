function addTwo(num: number){
    return num + 2;
}

function getUpper(word: string){
    return word.toUpperCase();
}

function signUp(name: string, age: number, isPaid: boolean){
    console.log(name,age,isPaid);
}

// same with arrow function
const signUpArrow = (name: string, age: number, isPaid: boolean)=> {
    console.log(name,age,isPaid);
}

getUpper("Ansh");

addTwo(5);

signUp("Ansh",20,false);

signUpArrow("Ansh",20,false);

function testFunc(number: number): number{
    return number + 1 + 2;
}

const getHello = (name: string):string=>{
    return name;
}

export {}