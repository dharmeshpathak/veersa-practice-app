import { Button } from '@mui/material'
import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";
function NoteCard({todo, deleteNote,id}) {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{todo.title}</Card.Title>
    
    <Card.Text>
     {todo.text}
    </Card.Text>
   
    <Button variant="light" onClick={()=>{deleteNote(id)}}>Delete</Button>

    <Link to = {`/veersa-practice-app/update/${id}`} ><Button variant="light">Update</Button></Link>
    
  </Card.Body>
</Card>
  )
}

export default NoteCard