class Notes {
    constructor() {
        this.notes = [] //set property called notes to empty array
        this.adapter = new NotesAdapter() //set adapter prop to a new instance of notesadapter
       // this.bindEventListeners() //to be created
        this.fetchAndLoadNotes()
    }

    fetchAndLoadNotes() {

        this.adapter
        .getNotes()
        .then(notes => {
            
            notes.forEach(note => this.notes.push(new Note(note))) //changes to Note objects to be able to take advantage of the note class
            console.log(this.notes) //not necessary, for viewing purposes, see Notes as objects in console log
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const notesContainer = document.getElementById('notes-container')
        notesContainer.innerHTML = 'my notes here'
        

    }
}