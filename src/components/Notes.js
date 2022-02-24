import React from 'react'
import NoteCard from './NoteCard'
import "./Notes.css"
import { Box, Typography } from '@mui/material';

function Notes({notes ,deleteNote ,editNote}) {
  
  
  return (
    <Box display="flex" flexDirection="column" justifyContent={"center"}   flexWrap={"wrap"} >
    <Typography variant="h4" component="h3" fontWeight={700} m={3} textAlign={"center"}>
        YOUR NOTES 
      </Typography>
    
<Box display="flex" flexDirection="row" justifyContent={"center"}   flexWrap={"wrap"}>
      { notes.map((todo,index)=><NoteCard todo={todo} key = {index} id={index} deleteNote = {deleteNote} editNote={editNote}/>)}
      </Box>
      
       
    </Box>
  )
}

export default Notes