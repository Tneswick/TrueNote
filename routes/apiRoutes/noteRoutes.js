const router = require('express').Router()
const notes = require('../../db/db.json')
const { v4: uuidv4 } = require('uuid')
const { createNewNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const note = createNewNote(req.body)
    res.json(note)
})

router.delete('/notes/:id', (req, res) => {
    const noteId = req.body.id

    deleteNote(noteId)
    res.send('Delete Request Received')
})

module.exports = router;