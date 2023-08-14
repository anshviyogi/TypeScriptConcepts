type User = {
    name:string,
    id: string
}

type Admin = {
    username:string,
    id: string
}

let login: User | Admin = {
    name:"Ansh",
    id:"4563"
}

// '|' - this symbol is for Union

function getDbId(id: number|string): number|string{
    if (typeof id === "string"){
        id.toLowerCase()
    } else {
        id.toString()
    }
    return id;
}

getDbId('1234')

// in an array

const array: Array<number | string> = [1,2,3,4,5,'6']

export {}