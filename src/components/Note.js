import React from "react";
import "./Note.css";
import { useState } from "react";
function Note({addNotes}) {
  
  const [title,setTitle] = useState("");
  const [text,setText] = useState("");


  return (
    <div className="addNote">
     <h1>ADD NOTE HERE </h1>
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
      <button className="addButton" onClick={()=>addNotes(title,text)} >ADD NOTE</button>
    </div>
  );
}

export default Note;
