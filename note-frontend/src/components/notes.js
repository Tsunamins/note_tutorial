class Notes {
    constructor() {
        this.notes = [] //set property called notes to empty array
        this.adapter = new NotesAdapter() //set adapter prop to a new instance of notesadapter
        this.initBindingsAndEventListeners() //to be created
        this.fetchAndLoadNotes()
    }

    initBindingsAndEventListeners(){
        this.notesContainer = document.getElementById('notes-container')
        this.newNoteBody = document.getElementById('new-note-body')
        this.noteForm = document.getElementById('new-note-form')
        this.noteForm.addEventListener('submit', this.createNote.bind(this)) //params expl:(when form *submit*ted, use this *function*), func params bind *this* to Notes class, considered hard bind, otherwise will bind the form and not the notes class
    }

    createNote(e){
        
        e.preventDefault()
        //to see if function is working: console.log('note is being created')
        const value = this.newNoteBody.value

        this.adapter.createNote(value)
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
        
        

        //moved to new function above so as not to do it with every render: const notesContainer = document.getElementById('notes-container')
        //part of this moved to note.js to renderLi object: this.notesContainer.innerHTML = this.notes.map(note => `<li>${note.body}</li>`).join('') //join because other wise each <li> marker is in individual array which won't process in html doc, join the array to make a string to render in in html document
        this.notesContainer.innerHTML = this.notes.map(note => note.renderLi()).join('')
        


        //my simple solution, not working with ul/li
        // this.notes.forEach(note => {
        //     const p = document.createElement('p')
        //     p.innerHTML = `<p>${note.body}</p>` //is this way simpler, however?
        //     notesContainer.appendChild(p)
        //})

        
        

    }
}