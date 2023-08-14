const User = {
    name: "Ansh",
    email: "ansh@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name:"Ansh",isPaid:true})

function createCourse():{name:string, price:number}{
    return {name:"ReactJs", price:399};
}

// creating self types

type myType = {
    name : string,
    age: number,
    isPrime : boolean
}


function createType(ty: myType){
    
}

type newStringType = string | boolean | number;

function some(a: newStringType){

}

some(true)
some(20)
some('ansh')

createType({name:"Ansh", age:20, isPrime:false})

// READ-ONLY AND OPTIONAL 

type ObjType = {
    readonly id: string,
    name: string,
    age?:number
}

var myObj: ObjType = {
    id:"123",
    name:"Ansh"
}

console.log(myObj)

// Combining TYPES
type card1 = {
    cardNumber: number
}

type card2 = {
    cardName: string
}

// COMBINING Card1 & Card2
type Card = card1 & card2;


export {}