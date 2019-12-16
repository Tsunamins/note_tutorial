class App {
    constructor(){ //new in index.js gets this constructor
        
        this.notes = new Notes() //new instance of notes class
        //app assigns a new property called notes
        //and invokes notes component in src/components/notes.js
    }
}