class NotesAdapter { //will communicate with backend API, sometimes called service
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/notes" 

    }

    getNotes() {//consider instance method
        return fetch(this.baseUrl).then(res => res.json()) //parse response into json
    }
}

