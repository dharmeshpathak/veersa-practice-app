import React from "react";
import "./Note.css";
import { useState } from "react";
import {useParams} from 'react-router-dom'
function EditNote({notes,editNote}) {
const { id } = useParams();
  const [title,setTitle] = useState(notes[id].title);
  const [text,setText] = useState(notes[id].text);
  
  
console.log(id,title,text);


  return (
    <div className="addNote">
     <h1>Update NOTE HERE </h1>
      <input
        name="title"
        placeholder="Enter note"
        value={title}
        className="inputField"
        onChange={(e)=>setTitle(e.target.value.trim())}
      />
      <input
        name="text"
        placeholder="Enter Details"
        value={text}
        className="inputField"
        onChange={(e) => setText(e.target.value.trim())}
      />
      <button className="addButton" onClick={()=>{editNote(id,title,text);}} >Update NOTE</button>
    </div>
  );
}

export default EditNote;
