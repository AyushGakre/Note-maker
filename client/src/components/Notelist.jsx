import React from "react";

const Notelist = ({ notes, onEditNote, onDeleteNote })=>{
    return(
        <div>
            <ul className="list-none p-0"> 
                {notes.map((note)=>(
                    <li key={note._id} className=" p-2 mt-4 bg-gray-200 rounded-lg">
                        <strong className="text-2xl text-gray-700">{note.title}</strong>
                        <p className=" font-sans font-medium text-xl">{note.content}</p>
                        <button onClick={()=> onEditNote(
                            note._id,
                            prompt("Enter update title:",note.title),
                            prompt("Enter update content:",note.content)
                        )} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>

                        <button onClick={()=> onDeleteNote(note._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Notelist