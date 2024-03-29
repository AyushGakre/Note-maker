import React from "react";

const AddNote = ({ title, setTitle, content, setContent, onAddNote }) => {
    return(
        <div >
            <div className=" font-sans font-normal text-xl">
            <h2>Add Notes</h2>
            </div>
            <div className=" flex flex-col space-y-3">
            <input className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <textarea className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="content"
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            />
            <button onClick={onAddNote} className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Note</button>
            </div>
        </div>
    )
}
export default AddNote