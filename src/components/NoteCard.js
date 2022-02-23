import { Button } from '@mui/material'
import React from 'react'
import Card from 'react-bootstrap/Card'
function NoteCard({todo, deleteNote,id}) {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{todo.title}</Card.Title>
    
    <Card.Text>
     {todo.text}
    </Card.Text>
    <Button onClick={()=>{deleteNote(id)}}>Delete</Button>
    <Button onClick={()=>{deleteNote(id)}}>Edit Task</Button>
    
  </Card.Body>
</Card>
  )
}

export default NoteCard