import React from 'react'
import NoteCard from './NoteCard'
import "./Notes.css"

function Notes({notes ,deleteNote ,editNote}) {
  
  
  return (
    <div className='notes'>
    

      { notes.map((todo,index)=><NoteCard todo={todo} key = {index} id={index} deleteNote = {deleteNote} editNote={editNote}/>)}
       
    </div>
  )
}

export default Notes