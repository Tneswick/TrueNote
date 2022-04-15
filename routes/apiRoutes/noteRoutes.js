const router = require('express').Router()
const notes = require('../../db/db.json')
const { v4: uuidv4 } = require('uuid')
const { createNewNote, deleteNote } = require('../../lib/notes')
const fs = require('fs')

router.get('/notes', (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    return res.status(200).json(JSON.parse(data))
  })
})

router.post('/notes', (req, res) => {
  req.body.id = uuidv4()
  const note = createNewNote(req.body)
  return res.status(200).json(note)
})

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id
  deleteNote(noteId)
  res.send('Delete Request Received')
})

module.exports = router