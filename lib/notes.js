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
    // const parsedArr = JSON.parse(noteArr)
    // console.log(noteArr);
    // console.log(noteArr[1].id);
    // console.log(noteId);

    const filteredNotes = noteArr.filter((object) => {
        console.log(object.id);
        if (object.id === noteId) {
            return false
        }
        return true
    })

    fs.writeFile('./db/db.json', JSON.stringify(filteredNotes, null, 2), (writeErr) => {
        writeErr
            ? console.error(writeErr)
            : console.info('Successfully deleted note!')
    })
}

module.exports = {
    createNewNote,
    deleteNote
};