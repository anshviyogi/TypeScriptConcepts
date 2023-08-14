class User {
    private name;
    
    set setName(name){
        this.name = name;
    }

    get getName(): string{
        return this.name
    }
}

const user = new User();

user.setName = "Ansh";
const username = user.getName;
console.log(username);