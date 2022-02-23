import React from 'react'
import NoteCard from './NoteCard'
import "./Notes.css"

function Notes({notes ,deleteNote }) {
  
  
  return (
    <div className='notes'>
    

      { notes.map((todo,index)=><NoteCard todo={todo} key = {index} id={index} deleteNote = {deleteNote}/>)}
       
    </div>
  )
}

export default Notes