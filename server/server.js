const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 3000

// middleware
app.use(cors())
app.use(express.json())

// connect mongodb
mongoose.connect("mongodb+srv://Ayush:1US2Ge9pwIXnlzr6@cluster.rd3tdse.mongodb.net/")

// make model
const Note = mongoose.model('Note',{
    title: String,
    content: String
})

//listen connection
mongoose.connection.on("connected", ()=>{
    console.log("Mongo db is connected")
})

mongoose.connection.on("error", (err)=>{
    console.log("Mongo db error", err)
})

// routes
app.get('/',(req,res) => {
    res.send("Hi this is root node")
})

app.post('/api/notes', async(req,res)=>{
    const {title, content} = req.body;
    const note = new Note ({title, content})
    try {
        const newNote = await note.save()
        res.status(211).json(newNote)
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
})

app.get('/api/notes', async(req,res)=>{
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

app.put('/api/notes/:id', async(req,res) => {
    const {title, content} = req.body
    const noteID = req.params.id
    try {
        const Updatednotes = await Note.findByIdAndUpdate(
            noteID,
            {title, content},
            {new:true})
            res.json(Updatednotes)
    } catch (error) {
        res.status(404).json({ message: "Note not found" });
    }
})

app.delete('/api/notes/:id', async(req,res)=>{
    const noteID = req.params.id;
    try {
        await Note.findByIdAndDelete(noteID)
        res.json({
            message : "Note deleted successfully"
        })
    } catch (error) {
        res.status(404).json({ message: "Note not found" });
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

