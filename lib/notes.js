const fs = require('fs')
const noteArr = require('../db/db.json')

function createNewNote (body) {
    const newNote = body;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data)
            
            parsedNotes.push(newNote)

            fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 2), (writeErr) => {
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully added note!')
            })
        }
    })
    

    return newNote;
}

function deleteNote (noteId) {
    const parsedArr = JSON.parse(noteArr)

    parsedArr.filter((object) => {
        if (object.id === noteId) {
            return false
        }
        return true
    })
}

module.exports = {
    createNewNote,
    deleteNote
};