class Note {
    constructor(noteJSON){
        this.id = noteJSON.id
        this.body = noteJSON.body
    }

    renderLi(){
        return `<li>${this.body}</li>` //new place for dom manip
    }
}

//use this constructor to create a new note? as iterating over note array