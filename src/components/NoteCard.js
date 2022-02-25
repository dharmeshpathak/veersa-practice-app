import { Button } from '@mui/material'
import React from 'react'
import {Card} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function NoteCard({todo, deleteNote,id}) {
  const todos = useSelector(state=>state.notes)
  const dispatch = useDispatch();
  const deleteItem = (id)=>{
    const newTodoList = todos.filter((todo,index)=>{
      return id !==index
    })

    dispatch({type:"DELETE_TASK",payload:newTodoList})
  }
  return (
    <Card style={{ width: '18rem' ,margin:"10px"}}>
  <Card.Body>
    <Card.Title>{todo.title}</Card.Title>
    
    <Card.Text>
     {todo.text}
    </Card.Text>
  
    <Button variant="light" onClick={()=>deleteItem(id)}>Delete</Button>

    <Link to = {`/veersa-practice-app/update/${id}`} ><Button variant="light">Update</Button></Link>
    
  </Card.Body>
</Card>
  )
}

export default NoteCard