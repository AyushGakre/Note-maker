import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNote from './components/AddNote'
import axios from 'axios'
import Notelist from './components/Notelist'

function App() {
  const[notes, setNotes] = useState([])
  const[title, setTitle] = useState("")
  const[content,setContent] = useState("")

  useEffect(() => {
    // Fetch notes from the server
    axios.get("http://localhost:3000/api/notes")
        .then((response) => setNotes(response.data))
        .catch((error) => console.error("Error fetching notes:", error));
}, [])

  const handleAddNote = () =>{
    axios.post("http://localhost:3000/api/notes/", {title, content}).then((response)=>{
      setNotes([...notes,response.data])
      setTitle("")
      setContent("")
    }).catch((error)=> console.error("Error in adding notes",error))
  }
  const handleEditNote = (id, updatedTitle, updatedContent) => {
    // Update note by ID
    axios
        .put(`http://localhost:3000/api/notes/${id}`, {
            title: updatedTitle,
            content: updatedContent,
        })
        .then((response) => {
            const updatedNotes = notes.map((note) =>
                note._id === id ? response.data : note
            );
            setNotes(updatedNotes);
        })
        .catch((error) => console.error("Error updating note:", error));
};

const handleDeleteNote = (id) => {
    // Delete note by ID
    axios
        .delete(`http://localhost:3000/api/notes/${id}`)
        .then((response) => {
            const updatedNotes = notes.filter((note) => note._id !== id);
            setNotes(updatedNotes);
        })
        .catch((error) => console.error("Error deleting note:", error));
};

  return (
    <div className=' mx-5 px-20 py-20 shadow-md rounded-lg bg-slate-400'>
      <div className=' text-center font-sans font-semibold text-4xl'>
      <h1>Notes App</h1>
      </div>
      <div>
      <AddNote
      title={title} 
      setTitle={setTitle}
       content={content} 
       setContent={setContent} 
       onAddNote={handleAddNote}/>
       </div>
       <div >
       <Notelist
       notes ={notes}
        onEditNote={handleEditNote}
         onDeleteNote={handleDeleteNote}/>
         </div>
    </div>
  )
}

export default App
