
const fs = require('fs')
const chalk = require('chalk')


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log('new note added')
    }
    else{
        console.log('note title taken!!')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    notesToKeep = notes.filter(note => note.title !== title)
    if (notesToKeep.length !== notes.length){
        console.log(chalk.green.inverse('Note removed!'))
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
    saveNotes(notesToKeep)
}

const readNotes = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find(note => note.title === title)
    if (notesToRead){
        console.log(chalk.red.bold(notesToRead.title))
        console.log(notesToRead.body)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    notes.forEach(note => 
        console.log(note)
    );
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes:readNotes
}

