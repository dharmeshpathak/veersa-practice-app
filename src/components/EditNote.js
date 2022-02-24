import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import "./Note.css"
import { useState } from "react";
import {useParams} from 'react-router-dom'
function EditNote({notes,editNote}) {
const { id } = useParams();
  const [title,setTitle] = useState(notes[id].title);
  const [text,setText] = useState(notes[id].text);
  
  
console.log(id,title,text);


  return (
    <Box
      elevation={1}
      component={Paper}
      p={4}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h3" component="h2" fontWeight={700} m={3}>
        Update NOTES HERE
      </Typography>
      <input
        name="title"
        placeholder="Enter note"
        value={title}
        className="inputField"
        onChange={(e)=>setTitle(e.target.value)}
        
      />
      <input
        name="text"
        placeholder="Enter Details"
        value={text}
        className="inputField"
        onChange={(e) => setText(e.target.value)}
      />
     <Button
        variant="outlined" onClick={()=>{editNote(id,title,text);}} >Update NOTE</Button>
    </Box>
  );
}

export default EditNote;
