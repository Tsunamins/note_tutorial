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
        //consider from here have access to this.notes, try console.log(this.notes)
        
        

        const notesContainer = document.getElementById('notes-container')
        notesContainer.innerHTML = this.notes.map(note => `<li>${note.body}</li>`).join('') //join because other wise each <li> marker is in individual array which won't process in html doc, join the array to make a string to render in in html document
        
        


        //my simple solution, not working with ul/li
        // this.notes.forEach(note => {
        //     const p = document.createElement('p')
        //     p.innerHTML = `<p>${note.body}</p>` //is this way simpler, however?
        //     notesContainer.appendChild(p)
        //})

        
        

    }
}