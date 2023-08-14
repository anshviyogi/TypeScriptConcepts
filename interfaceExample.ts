interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story {
    storyCaller(): string
}

class Instagram implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number){

    }

    storyCaller(): string {
        return "It was a great story"
    }
}

export {}