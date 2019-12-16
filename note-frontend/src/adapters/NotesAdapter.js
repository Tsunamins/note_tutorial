class NotesAdapter { //will communicate with backend API, sometimes called service
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/notes'

    }

    getNotes() {//consider instance method
        return fetch(this.baseUrl) //GET request
        .then(res => res.json()) //parse response into json
        
    }

    createNote(value){
        const note = {
            body: value
        }
        //debugger
        return fetch(this.baseUrl,{//POST request takes in 2nd arg, with options passed in
            method: 'POST', 
            headers: {                
                'content-type': 'application/json'
            },
            body: JSON.stringify({note: note}) //stringify note object previously made reference, this note: note patter is specific to ES6
        }) 
        .then(res => res.json()) //send parsed json object back to Notes class in createNote 
    }
}

