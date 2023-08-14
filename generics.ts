// problem 1
function identityOne(val: string): string {
    return val;
}

// problem 2
function identityTwo(val: any): any {
    return val;
}

// solution
function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree("ANsh")
identityThree(true)
identityThree(1234)