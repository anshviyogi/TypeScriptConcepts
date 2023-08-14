interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: number | string
    startTrial(): string
    getCoupon(): number
}

// reopening of interface
interface User {
    githubLogin: string
}

// Inherentence
interface Admin extends User {
    role: 'PM' | 'Admin' | 'SA'
}

const ansh: User = {
    dbId: 1, email: "ansh@gmgial.com", userId: 123, startTrial: () => {
        return "string";
    }, getCoupon: () => {
        return 0
    },
    githubLogin: "az442"
}

const admin: Admin = {
    dbId: 1, email: "ansh@gmgial.com", userId: 123, startTrial: () => {
        return "string";
    }, getCoupon: () => {
        return 0
    },
    githubLogin: "az442", role: "Admin"
}