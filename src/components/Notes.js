import React from 'react'
import NoteCard from './NoteCard'
import "./Notes.css"
import { Box, Typography } from '@mui/material';
import {  useSelector } from 'react-redux';

function Notes({deleteNote ,editNote}) {
  const todos = useSelector(state=>state.notes)
  
  console.log("todos=",todos)
  return (
    <Box display="flex" flexDirection="column" justifyContent={"center"}   flexWrap={"wrap"} >
    <Typography variant="h4" component="h3" fontWeight={700} m={3} textAlign={"center"}>
        YOUR NOTES 
      </Typography>
    
<Box display="flex" flexDirection="row" justifyContent={"center"}   flexWrap={"wrap"}>
      { todos.map((todo,index)=><NoteCard todo={todo} key = {index} id={index} deleteNote = {deleteNote} editNote={editNote}/>)}
      </Box>
      
       
    </Box>
  )
}

export default Notes